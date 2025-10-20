# Personal Blog App - Frontend

A modern, responsive blog application built with React, TypeScript, and Vite. This frontend application is designed to work with a backend API based on the provided database schema.

## Features

- **Modern Stack**: Built with React 18, TypeScript, and Vite for fast development
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Rich Content**: Support for posts, categories, tags, and comments
- **User-Friendly**: Clean and intuitive interface for reading and navigating content
- **SEO Ready**: Meta tags and semantic HTML for better search engine visibility
- **Type-Safe**: Full TypeScript support for better code quality and developer experience

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Input, Badge)
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   └── post/           # Post-related components (PostCard, CommentSection)
├── hooks/              # Custom React hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── usePagination.ts
├── pages/              # Page components
│   ├── HomePage.tsx
│   └── PostDetailPage.tsx
├── services/           # API services and mock data
│   ├── api.ts
│   └── mockData.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── formatters.ts
│   └── validators.ts
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and CSS variables
```

## Tech Stack

- **React 18.3**: Modern React with hooks and concurrent features
- **TypeScript 5.2**: Type-safe development
- **Vite 5.3**: Fast build tool and dev server
- **React Router 6**: Client-side routing
- **Lucide React**: Beautiful icon library
- **date-fns**: Modern date utility library

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Home Page
- Hero section with welcome message
- Featured posts section
- Recent posts grid
- Sidebar with popular tags, categories, and posts

### Post Detail Page
- Full post content with rich formatting
- Author information card
- Related posts section
- Comment system with nested replies
- Social sharing capabilities

### Components

#### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Site information and links
- **Sidebar**: Dynamic sidebar with tags, categories, and popular posts

#### Post Components
- **PostCard**: Reusable post card with image, title, excerpt, and metadata
- **CommentSection**: Full-featured comment system with nested replies

#### Common Components
- **Button**: Versatile button component with multiple variants
- **Input**: Form input with label and error handling
- **Badge**: Tag/label component for categorization

## Styling

The application uses a custom CSS design system with:
- CSS variables for easy theming
- Responsive design with mobile-first approach
- Clean and modern aesthetic
- Smooth transitions and animations

### CSS Variables

All colors, spacing, and other design tokens are defined as CSS variables in `src/index.css`:
- Color palette (primary, secondary, text, background)
- Typography (font families, sizes)
- Spacing scale
- Border radius values
- Shadows

## API Integration

The app is ready for API integration. Currently uses mock data from `src/services/mockData.ts`.

### To integrate with a real API:

1. Update the API base URL in `src/services/api.ts`
2. Replace mock data calls with actual API calls
3. Add authentication if needed
4. Update error handling as required

### API Endpoints Expected

```typescript
GET    /api/posts                    // Get all posts
GET    /api/posts/:slug              // Get post by slug
GET    /api/posts/:id/related        // Get related posts
GET    /api/categories               // Get all categories
GET    /api/tags                     // Get all tags
GET    /api/comments?postId=:id      // Get comments for post
POST   /api/comments                 // Create new comment
```

## Database Schema Alignment

The application is built to align with your database schema:

- **Users**: Author profiles with avatar, bio, and social links
- **Posts**: Full blog posts with featured images, categories, tags, and SEO metadata
- **Categories**: Hierarchical category system
- **Tags**: Tag system for post organization
- **Comments**: Nested comment system with user/guest support
- **Post Reactions**: Like/reaction system (ready for implementation)
- **Page Views**: Analytics tracking (ready for implementation)

## Customization

### Changing the Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  /* ... other variables */
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

### Modifying Mock Data

Edit `src/services/mockData.ts` to change sample posts, categories, and tags.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with code splitting
- Lazy loading for images
- Efficient re-rendering with React best practices
- Fast dev server with HMR

## Future Enhancements

Potential features to add:
- Search functionality
- User authentication
- Admin dashboard for content management
- Dark mode toggle
- Newsletter subscription
- Social media integration
- Advanced filtering and sorting
- Bookmark/save posts feature
- Reading progress indicator
- Print-friendly post layout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues and questions, please open an issue in the repository.

---

Built with ❤️ using React and TypeScript
