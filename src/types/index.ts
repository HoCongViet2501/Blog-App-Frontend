// User types
export interface User {
  id: number;
  username: string;
  email: string;
  fullName?: string;
  bio?: string;
  avatarUrl?: string;
  websiteUrl?: string;
  isActive: boolean;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

// Category types
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentCategoryId?: number;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Tag types
export interface Tag {
  id: number;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
}

// Post types
export type PostType = 'article' | 'news' | 'tutorial';
export type PostStatus = 'draft' | 'published' | 'archived';

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImageUrl?: string;
  authorId: number;
  author?: User;
  categoryId?: number;
  category?: Category;
  postType: PostType;
  status: PostStatus;
  isFeatured: boolean;
  isCommentsEnabled: boolean;
  viewCount: number;
  readingTimeMinutes?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  tags?: Tag[];
  reactions?: PostReaction[];
}

// Comment types
export type CommentStatus = 'pending' | 'approved' | 'spam' | 'deleted';

export interface Comment {
  id: number;
  postId: number;
  userId?: number;
  user?: User;
  parentCommentId?: number;
  authorName?: string;
  authorEmail?: string;
  content: string;
  status: CommentStatus;
  ipAddress?: string;
  userAgent?: string;
  isAuthorReply: boolean;
  createdAt: string;
  updatedAt: string;
  replies?: Comment[];
}

// Media types
export interface Media {
  id: number;
  fileUrl: string;
  fileName: string;
  fileType?: string;
  fileSizeBytes?: number;
  altText?: string;
  caption?: string;
  uploadedById?: number;
  postId?: number;
  createdAt: string;
}

// Subscriber types
export type SubscriberStatus = 'active' | 'unsubscribed' | 'bounced';

export interface Subscriber {
  id: number;
  email: string;
  name?: string;
  status: SubscriberStatus;
  verificationToken?: string;
  verifiedAt?: string;
  unsubscribedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Post Reaction types
export type ReactionType = 'like' | 'love' | 'insightful';

export interface PostReaction {
  id: number;
  postId: number;
  userId?: number;
  reactionType: ReactionType;
  ipAddress?: string;
  createdAt: string;
}

// Search Query types
export interface SearchQuery {
  id: number;
  queryText: string;
  resultsCount: number;
  userId?: number;
  ipAddress?: string;
  createdAt: string;
}

// Page View types
export interface PageView {
  id: number;
  postId?: number;
  pageUrl?: string;
  referrerUrl?: string;
  userId?: number;
  ipAddress?: string;
  userAgent?: string;
  sessionId?: string;
  countryCode?: string;
  createdAt: string;
}

// Related Post types
export interface RelatedPost {
  id: number;
  postId: number;
  relatedPostId: number;
  post?: Post;
  relevanceScore: number;
  createdAt: string;
}

// Post Revision types
export interface PostRevision {
  id: number;
  postId: number;
  title?: string;
  content?: string;
  excerpt?: string;
  revisedById?: number;
  revisionNote?: string;
  createdAt: string;
}

// Social Share types
export type SocialPlatform = 'twitter' | 'facebook' | 'linkedin' | 'pinterest' | 'reddit';

export interface SocialShare {
  id: number;
  postId: number;
  platform: SocialPlatform;
  shareCount: number;
  lastUpdated: string;
}

// API Response types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
