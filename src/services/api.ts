import { Post, Category, Tag, Comment, User, PaginatedResponse } from '@/types';
import { mockPosts, mockCategories, mockTags, mockComments, mockUsers } from './mockData';

// Simulate API delay
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Posts API
 */
export const postsApi = {
  /**
   * Get all posts with optional filters
   */
  async getAll(params?: {
    page?: number;
    pageSize?: number;
    categoryId?: number;
    tagId?: number;
    featured?: boolean;
    status?: string;
  }): Promise<PaginatedResponse<Post>> {
    await delay();

    let filteredPosts = [...mockPosts];

    // Apply filters
    if (params?.categoryId) {
      filteredPosts = filteredPosts.filter(p => p.categoryId === params.categoryId);
    }
    if (params?.tagId) {
      filteredPosts = filteredPosts.filter(p =>
        p.tags?.some(t => t.id === params.tagId)
      );
    }
    if (params?.featured !== undefined) {
      filteredPosts = filteredPosts.filter(p => p.isFeatured === params.featured);
    }
    if (params?.status) {
      filteredPosts = filteredPosts.filter(p => p.status === params.status);
    }

    // Sort by published date (newest first)
    filteredPosts.sort((a, b) =>
      new Date(b.publishedAt || b.createdAt).getTime() -
      new Date(a.publishedAt || a.createdAt).getTime()
    );

    // Pagination
    const page = params?.page || 1;
    const pageSize = params?.pageSize || 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      data: paginatedPosts,
      total: filteredPosts.length,
      page,
      pageSize,
      totalPages: Math.ceil(filteredPosts.length / pageSize),
    };
  },

  /**
   * Get a single post by slug or ID
   */
  async getBySlug(slug: string): Promise<Post | null> {
    await delay();
    const post = mockPosts.find(p => p.slug === slug);
    return post || null;
  },

  /**
   * Get featured posts
   */
  async getFeatured(limit: number = 3): Promise<Post[]> {
    await delay();
    return mockPosts
      .filter(p => p.isFeatured && p.status === 'published')
      .slice(0, limit);
  },

  /**
   * Get popular posts by view count
   */
  async getPopular(limit: number = 5): Promise<Post[]> {
    await delay();
    return [...mockPosts]
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, limit);
  },

  /**
   * Get related posts
   */
  async getRelated(postId: number, limit: number = 3): Promise<Post[]> {
    await delay();
    const currentPost = mockPosts.find(p => p.id === postId);
    if (!currentPost) return [];

    // Find posts with similar tags or category
    return mockPosts
      .filter(p => p.id !== postId && p.status === 'published')
      .filter(p =>
        p.categoryId === currentPost.categoryId ||
        p.tags?.some(tag => currentPost.tags?.some(t => t.id === tag.id))
      )
      .slice(0, limit);
  },

  /**
   * Search posts
   */
  async search(query: string): Promise<Post[]> {
    await delay();
    const lowerQuery = query.toLowerCase();
    return mockPosts.filter(p =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.excerpt?.toLowerCase().includes(lowerQuery) ||
      p.content.toLowerCase().includes(lowerQuery) ||
      p.tags?.some(t => t.name.toLowerCase().includes(lowerQuery))
    );
  },
};

/**
 * Categories API
 */
export const categoriesApi = {
  /**
   * Get all categories
   */
  async getAll(): Promise<Category[]> {
    await delay();
    return mockCategories;
  },

  /**
   * Get a single category by slug
   */
  async getBySlug(slug: string): Promise<Category | null> {
    await delay();
    return mockCategories.find(c => c.slug === slug) || null;
  },

  /**
   * Get posts count for each category
   */
  async getWithPostCounts(): Promise<(Category & { postCount: number })[]> {
    await delay();
    return mockCategories.map(category => ({
      ...category,
      postCount: mockPosts.filter(p => p.categoryId === category.id).length,
    }));
  },
};

/**
 * Tags API
 */
export const tagsApi = {
  /**
   * Get all tags
   */
  async getAll(): Promise<Tag[]> {
    await delay();
    return mockTags;
  },

  /**
   * Get popular tags with post counts
   */
  async getPopular(limit: number = 10): Promise<(Tag & { postCount: number })[]> {
    await delay();
    const tagsWithCounts = mockTags.map(tag => ({
      ...tag,
      postCount: mockPosts.filter(p =>
        p.tags?.some(t => t.id === tag.id)
      ).length,
    }));

    return tagsWithCounts
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, limit);
  },
};

/**
 * Comments API
 */
export const commentsApi = {
  /**
   * Get comments for a post
   */
  async getByPostId(postId: number): Promise<Comment[]> {
    await delay();
    const comments = mockComments.filter(c => c.postId === postId && c.status === 'approved');

    // Organize comments with replies
    const topLevel = comments.filter(c => !c.parentCommentId);
    return topLevel.map(comment => ({
      ...comment,
      replies: comments.filter(c => c.parentCommentId === comment.id),
    }));
  },

  /**
   * Add a new comment
   */
  async create(commentData: Partial<Comment>): Promise<Comment> {
    await delay();
    const newComment: Comment = {
      id: mockComments.length + 1,
      postId: commentData.postId!,
      userId: commentData.userId,
      parentCommentId: commentData.parentCommentId,
      authorName: commentData.authorName,
      authorEmail: commentData.authorEmail,
      content: commentData.content!,
      status: 'pending',
      isAuthorReply: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockComments.push(newComment);
    return newComment;
  },
};

/**
 * Users API
 */
export const usersApi = {
  /**
   * Get user by ID
   */
  async getById(id: number): Promise<User | null> {
    await delay();
    return mockUsers.find(u => u.id === id) || null;
  },

  /**
   * Get user by username
   */
  async getByUsername(username: string): Promise<User | null> {
    await delay();
    return mockUsers.find(u => u.username === username) || null;
  },
};
