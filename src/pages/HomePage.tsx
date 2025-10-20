import React, { useState, useEffect } from 'react';
import { Post } from '@/types';
import { postsApi } from '@/services/api';
import { PostCard } from '@/components/post/PostCard';
import { Sidebar } from '@/components/layout/Sidebar';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const [featured, recent] = await Promise.all([
          postsApi.getFeatured(2),
          postsApi.getAll({ page: 1, pageSize: 6 }),
        ]);

        setFeaturedPosts(featured);
        setRecentPosts(recent.data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-state">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <main className="main-content">
          {/* Hero Section */}
          <section className="hero-section">
            <h1 className="hero-title">Welcome to MyBlog</h1>
            <p className="hero-description">
              Exploring technology, design, and development. Join me on a journey
              of learning, building, and sharing knowledge.
            </p>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="posts-section">
              <h2 className="section-title">Featured Posts</h2>
              <div className="posts-grid featured-grid">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} featured />
                ))}
              </div>
            </section>
          )}

          {/* Recent Posts */}
          <section className="posts-section">
            <h2 className="section-title">Recent Posts</h2>
            <div className="posts-grid">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};
