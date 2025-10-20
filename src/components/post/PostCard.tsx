import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, User } from 'lucide-react';
import { Post } from '@/types';
import { formatDate, formatReadingTime, formatViewCount } from '@/utils/formatters';
import { Badge } from '@/components/common/Badge';
import './PostCard.css';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  return (
    <article className={`post-card ${featured ? 'post-card-featured' : ''}`}>
      {post.featuredImageUrl && (
        <Link to={`/post/${post.slug}`} className="post-card-image-link">
          <img
            src={post.featuredImageUrl}
            alt={post.title}
            className="post-card-image"
          />
          {post.isFeatured && (
            <Badge variant="warning" className="featured-badge">
              Featured
            </Badge>
          )}
        </Link>
      )}

      <div className="post-card-content">
        {/* Category */}
        {post.category && (
          <Link to={`/category/${post.category.slug}`} className="post-card-category">
            {post.category.name}
          </Link>
        )}

        {/* Title */}
        <h2 className="post-card-title">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h2>

        {/* Excerpt */}
        {post.excerpt && <p className="post-card-excerpt">{post.excerpt}</p>}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="post-card-tags">
            {post.tags.slice(0, 3).map((tag) => (
              <Link key={tag.id} to={`/tag/${tag.slug}`}>
                <Badge variant="secondary" size="sm">
                  {tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="post-card-meta">
          <div className="meta-item">
            <User size={14} />
            <span>{post.author?.fullName || post.author?.username}</span>
          </div>
          <div className="meta-item">
            <Calendar size={14} />
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
          </div>
          {post.readingTimeMinutes && (
            <div className="meta-item">
              <Clock size={14} />
              <span>{formatReadingTime(post.readingTimeMinutes)}</span>
            </div>
          )}
          <div className="meta-item">
            <Eye size={14} />
            <span>{formatViewCount(post.viewCount)} views</span>
          </div>
        </div>
      </div>
    </article>
  );
};
