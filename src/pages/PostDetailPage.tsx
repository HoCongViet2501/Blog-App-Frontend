import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Eye, User, ArrowLeft } from 'lucide-react';
import { Post } from '@/types';
import { postsApi } from '@/services/api';
import { formatDate, formatReadingTime, formatViewCount } from '@/utils/formatters';
import { Badge } from '@/components/common/Badge';
import { CommentSection } from '@/components/post/CommentSection';
import { Sidebar } from '@/components/layout/Sidebar';
import './PostDetailPage.css';

export const PostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      try {
        const postData = await postsApi.getBySlug(slug);
        if (postData) {
          setPost(postData);
          const related = await postsApi.getRelated(postData.id, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-state">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="page-container">
        <div className="error-state">
          <h1>Post not found</h1>
          <p>The post you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <main className="main-content">
          <article className="post-detail">
            {/* Back Link */}
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Back to Posts
            </Link>

            {/* Category */}
            {post.category && (
              <Link
                to={`/category/${post.category.slug}`}
                className="post-category-badge"
              >
                {post.category.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="post-title">{post.title}</h1>

            {/* Meta */}
            <div className="post-meta">
              <div className="meta-item">
                <User size={16} />
                <span>{post.author?.fullName || post.author?.username}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>{formatDate(post.publishedAt || post.createdAt, 'MMMM dd, yyyy')}</span>
              </div>
              {post.readingTimeMinutes && (
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{formatReadingTime(post.readingTimeMinutes)}</span>
                </div>
              )}
              <div className="meta-item">
                <Eye size={16} />
                <span>{formatViewCount(post.viewCount)} views</span>
              </div>
            </div>

            {/* Featured Image */}
            {post.featuredImageUrl && (
              <img
                src={post.featuredImageUrl}
                alt={post.title}
                className="post-featured-image"
              />
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <Link key={tag.id} to={`/tag/${tag.slug}`}>
                    <Badge variant="secondary">{tag.name}</Badge>
                  </Link>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="post-content">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Author Card */}
            {post.author && (
              <div className="author-card">
                {post.author.avatarUrl && (
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.fullName || ''}
                    className="author-avatar"
                  />
                )}
                <div className="author-info">
                  <h3 className="author-name">
                    {post.author.fullName || post.author.username}
                  </h3>
                  {post.author.bio && (
                    <p className="author-bio">{post.author.bio}</p>
                  )}
                </div>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="related-posts">
                <h2 className="related-title">Related Posts</h2>
                <div className="related-grid">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/post/${relatedPost.slug}`}
                      className="related-post"
                    >
                      {relatedPost.featuredImageUrl && (
                        <img
                          src={relatedPost.featuredImageUrl}
                          alt={relatedPost.title}
                          className="related-image"
                        />
                      )}
                      <h3 className="related-post-title">{relatedPost.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comments */}
            {post.isCommentsEnabled && <CommentSection postId={post.id} />}
          </article>
        </main>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};
