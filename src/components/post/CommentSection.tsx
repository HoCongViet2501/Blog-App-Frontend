import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Comment } from '@/types';
import { commentsApi } from '@/services/api';
import { formatRelativeTime, getInitials } from '@/utils/formatters';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import './CommentSection.css';

interface CommentSectionProps {
  postId: number;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: '',
  });
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  useEffect(() => {
    loadComments();
  }, [postId]);

  const loadComments = async () => {
    try {
      const data = await commentsApi.getByPostId(postId);
      setComments(data);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent, parentId?: number) => {
    e.preventDefault();

    if (!newComment.content.trim()) return;

    try {
      await commentsApi.create({
        postId,
        parentCommentId: parentId,
        authorName: newComment.name,
        authorEmail: newComment.email,
        content: newComment.content,
      });

      setNewComment({ name: '', email: '', content: '' });
      setReplyingTo(null);
      loadComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const CommentItem: React.FC<{ comment: Comment; isReply?: boolean }> = ({
    comment,
    isReply = false,
  }) => (
    <div className={`comment ${isReply ? 'comment-reply' : ''}`}>
      <div className="comment-avatar">
        {comment.user?.avatarUrl ? (
          <img src={comment.user.avatarUrl} alt={comment.user.fullName || ''} />
        ) : (
          <div className="avatar-placeholder">
            {getInitials(comment.user?.fullName || comment.authorName)}
          </div>
        )}
      </div>

      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-author">
            {comment.user?.fullName || comment.authorName}
          </span>
          {comment.isAuthorReply && (
            <span className="author-badge">Author</span>
          )}
          <span className="comment-date">
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>

        <p className="comment-text">{comment.content}</p>

        {!isReply && (
          <button
            className="reply-button"
            onClick={() => setReplyingTo(comment.id)}
          >
            Reply
          </button>
        )}

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <form
            className="comment-form reply-form"
            onSubmit={(e) => handleSubmit(e, comment.id)}
          >
            <textarea
              className="comment-textarea"
              placeholder="Write your reply..."
              value={newComment.content}
              onChange={(e) =>
                setNewComment({ ...newComment, content: e.target.value })
              }
              rows={3}
              required
            />
            <div className="comment-form-actions">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo(null)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm">
                <Send size={16} />
                Reply
              </Button>
            </div>
          </form>
        )}

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="comment-replies">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return <div className="comment-section-loading">Loading comments...</div>;
  }

  return (
    <div className="comment-section">
      <h2 className="comment-section-title">
        <MessageCircle size={24} />
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-form-inputs">
          <Input
            type="text"
            placeholder="Your name"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            value={newComment.email}
            onChange={(e) =>
              setNewComment({ ...newComment, email: e.target.value })
            }
            required
          />
        </div>
        <textarea
          className="comment-textarea"
          placeholder="Write your comment..."
          value={newComment.content}
          onChange={(e) =>
            setNewComment({ ...newComment, content: e.target.value })
          }
          rows={4}
          required
        />
        <Button type="submit">
          <Send size={16} />
          Post Comment
        </Button>
      </form>

      {/* Comments List */}
      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="no-comments">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};
