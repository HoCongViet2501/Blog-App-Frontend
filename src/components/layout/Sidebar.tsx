import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Category, Post } from '@/types';
import { tagsApi, categoriesApi, postsApi } from '@/services/api';
import { Badge } from '@/components/common/Badge';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  const [popularTags, setPopularTags] = useState<(Tag & { postCount: number })[]>([]);
  const [categories, setCategories] = useState<(Category & { postCount: number })[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadSidebarData = async () => {
      try {
        const [tagsData, categoriesData, postsData] = await Promise.all([
          tagsApi.getPopular(8),
          categoriesApi.getWithPostCounts(),
          postsApi.getPopular(5),
        ]);

        setPopularTags(tagsData);
        setCategories(categoriesData.filter(c => c.postCount > 0));
        setPopularPosts(postsData);
      } catch (error) {
        console.error('Error loading sidebar data:', error);
      }
    };

    loadSidebarData();
  }, []);

  return (
    <aside className="sidebar">
      {/* Popular Tags */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">Popular Tags</h3>
        <div className="tags-cloud">
          {popularTags.map((tag) => (
            <Link key={tag.id} to={`/tag/${tag.slug}`} className="tag-link">
              <Badge variant="secondary" size="sm">
                {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">Categories</h3>
        <div className="category-list">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="category-item"
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.postCount}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">Popular Posts</h3>
        <div className="popular-posts">
          {popularPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.slug}`} className="popular-post">
              {post.featuredImageUrl && (
                <img
                  src={post.featuredImageUrl}
                  alt={post.title}
                  className="popular-post-image"
                />
              )}
              <div className="popular-post-content">
                <h4 className="popular-post-title">{post.title}</h4>
                <span className="popular-post-meta">{post.viewCount} views</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
