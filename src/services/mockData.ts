import { User, Category, Tag, Post, Comment } from '@/types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
    fullName: 'John Doe',
    bio: 'Full-stack developer passionate about web technologies and open source.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    websiteUrl: 'https://johndoe.dev',
    isActive: true,
    isAdmin: true,
    createdAt: '2023-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    username: 'janedoe',
    email: 'jane@example.com',
    fullName: 'Jane Smith',
    bio: 'UI/UX designer and frontend developer. Love creating beautiful user experiences.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    isActive: true,
    isAdmin: false,
    createdAt: '2023-03-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
];

// Mock Categories
export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Technology',
    slug: 'technology',
    description: 'Articles about technology, programming, and software development',
    displayOrder: 1,
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Web Development',
    slug: 'web-development',
    description: 'Tutorials and articles about web development',
    parentCategoryId: 1,
    displayOrder: 2,
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 3,
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design, graphic design, and visual creativity',
    displayOrder: 3,
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 4,
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Personal development, productivity, and life tips',
    displayOrder: 4,
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
];

// Mock Tags
export const mockTags: Tag[] = [
  { id: 1, name: 'React', slug: 'react', createdAt: '2023-01-01T00:00:00Z' },
  { id: 2, name: 'TypeScript', slug: 'typescript', createdAt: '2023-01-01T00:00:00Z' },
  { id: 3, name: 'JavaScript', slug: 'javascript', createdAt: '2023-01-01T00:00:00Z' },
  { id: 4, name: 'CSS', slug: 'css', createdAt: '2023-01-01T00:00:00Z' },
  { id: 5, name: 'Node.js', slug: 'nodejs', createdAt: '2023-01-01T00:00:00Z' },
  { id: 6, name: 'UI/UX', slug: 'uiux', createdAt: '2023-01-01T00:00:00Z' },
  { id: 7, name: 'Tutorial', slug: 'tutorial', createdAt: '2023-01-01T00:00:00Z' },
  { id: 8, name: 'Best Practices', slug: 'best-practices', createdAt: '2023-01-01T00:00:00Z' },
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript in 2024',
    slug: 'getting-started-react-typescript-2024',
    excerpt: 'Learn how to set up a modern React application with TypeScript, including best practices and essential tools.',
    content: `# Getting Started with React and TypeScript

React and TypeScript have become the go-to combination for building modern web applications. In this comprehensive guide, we'll explore how to set up and structure a React + TypeScript project from scratch.

## Why TypeScript?

TypeScript brings static typing to JavaScript, which helps catch errors early in the development process. Combined with React, it provides:

- Better IDE support and autocompletion
- Improved code maintainability
- Enhanced refactoring capabilities
- Better documentation through types

## Setting Up Your Project

Let's start by creating a new React project with Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

This gives us a modern, fast development environment with TypeScript already configured.

## Project Structure

A well-organized project structure is crucial for maintainability. Here's a recommended structure:

\`\`\`
src/
  ├── components/
  ├── hooks/
  ├── services/
  ├── types/
  ├── utils/
  └── pages/
\`\`\`

## Conclusion

React and TypeScript together provide a powerful foundation for building scalable web applications. Start small, learn the basics, and gradually incorporate more advanced patterns as you grow.`,
    featuredImageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    authorId: 1,
    author: mockUsers[0],
    categoryId: 2,
    category: mockCategories[1],
    postType: 'tutorial',
    status: 'published',
    isFeatured: true,
    isCommentsEnabled: true,
    viewCount: 1520,
    readingTimeMinutes: 8,
    publishedAt: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    tags: [mockTags[0], mockTags[1], mockTags[6]],
  },
  {
    id: 2,
    title: 'Modern CSS Techniques You Should Know',
    slug: 'modern-css-techniques-2024',
    excerpt: 'Discover the latest CSS features and techniques that will make your web designs more efficient and beautiful.',
    content: `# Modern CSS Techniques

CSS has evolved significantly in recent years. Let's explore some modern techniques that every web developer should know.

## CSS Grid and Flexbox

These layout systems have revolutionized how we create responsive designs. CSS Grid is perfect for two-dimensional layouts, while Flexbox excels at one-dimensional arrangements.

## CSS Variables

Custom properties (CSS variables) allow you to create more maintainable stylesheets:

\`\`\`css
:root {
  --primary-color: #007bff;
  --spacing-unit: 1rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
}
\`\`\`

## Container Queries

Container queries enable responsive design based on container size rather than viewport size, offering more flexible component-based styling.`,
    featuredImageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
    authorId: 2,
    author: mockUsers[1],
    categoryId: 2,
    category: mockCategories[1],
    postType: 'article',
    status: 'published',
    isFeatured: true,
    isCommentsEnabled: true,
    viewCount: 2340,
    readingTimeMinutes: 6,
    publishedAt: '2024-01-20T14:00:00Z',
    createdAt: '2024-01-18T10:00:00Z',
    updatedAt: '2024-01-20T14:00:00Z',
    tags: [mockTags[3], mockTags[7]],
  },
  {
    id: 3,
    title: 'Building Scalable Node.js Applications',
    slug: 'building-scalable-nodejs-applications',
    excerpt: 'Best practices and patterns for creating Node.js applications that can scale with your business needs.',
    content: `# Building Scalable Node.js Applications

Scalability is crucial for modern web applications. Here's how to build Node.js apps that can grow with your users.

## Architecture Patterns

Choose the right architecture pattern for your application:
- Microservices for large, complex systems
- Modular monoliths for simpler applications
- Serverless for event-driven workloads

## Performance Optimization

- Use clustering to leverage multiple CPU cores
- Implement caching strategies (Redis, Memcached)
- Optimize database queries and use connection pooling
- Monitor performance with tools like New Relic or DataDog`,
    featuredImageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    authorId: 1,
    author: mockUsers[0],
    categoryId: 1,
    category: mockCategories[0],
    postType: 'article',
    status: 'published',
    isFeatured: false,
    isCommentsEnabled: true,
    viewCount: 890,
    readingTimeMinutes: 10,
    publishedAt: '2024-02-01T09:00:00Z',
    createdAt: '2024-01-28T10:00:00Z',
    updatedAt: '2024-02-01T09:00:00Z',
    tags: [mockTags[4], mockTags[7]],
  },
  {
    id: 4,
    title: 'The Art of UI/UX Design: Principles and Practices',
    slug: 'art-of-uiux-design-principles',
    excerpt: 'Essential design principles that every designer should master to create intuitive and beautiful user interfaces.',
    content: `# The Art of UI/UX Design

Great design is invisible. Let's explore the principles that make user interfaces both beautiful and functional.

## Core Principles

1. **Consistency**: Maintain visual and functional consistency throughout your design
2. **Hierarchy**: Guide users through content with clear visual hierarchy
3. **Feedback**: Provide immediate feedback for user actions
4. **Accessibility**: Design for all users, including those with disabilities

## Color Theory

Understanding color psychology and creating harmonious color palettes is essential for effective UI design.

## Typography

Choose readable fonts and establish a clear typographic scale for better readability and visual appeal.`,
    featuredImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    authorId: 2,
    author: mockUsers[1],
    categoryId: 3,
    category: mockCategories[2],
    postType: 'article',
    status: 'published',
    isFeatured: false,
    isCommentsEnabled: true,
    viewCount: 1750,
    readingTimeMinutes: 7,
    publishedAt: '2024-02-05T11:00:00Z',
    createdAt: '2024-02-03T10:00:00Z',
    updatedAt: '2024-02-05T11:00:00Z',
    tags: [mockTags[5]],
  },
];

// Mock Comments
export const mockComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    user: mockUsers[1],
    content: 'Great article! This really helped me understand TypeScript better. Thanks for sharing!',
    status: 'approved',
    isAuthorReply: false,
    createdAt: '2024-01-16T08:00:00Z',
    updatedAt: '2024-01-16T08:00:00Z',
  },
  {
    id: 2,
    postId: 1,
    userId: 1,
    user: mockUsers[0],
    parentCommentId: 1,
    content: 'Thank you! Glad you found it helpful. Let me know if you have any questions.',
    status: 'approved',
    isAuthorReply: true,
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
  },
  {
    id: 3,
    postId: 2,
    authorName: 'Alex Johnson',
    authorEmail: 'alex@example.com',
    content: 'CSS has come so far! Container queries are a game changer.',
    status: 'approved',
    isAuthorReply: false,
    createdAt: '2024-01-21T15:00:00Z',
    updatedAt: '2024-01-21T15:00:00Z',
  },
];
