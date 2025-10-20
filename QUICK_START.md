# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies (Already Done!)
The dependencies have been installed. You're ready to go!

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

### 3. Explore the App

Visit these pages:
- **Home Page**: http://localhost:5173/
- **Post Detail**: Click on any post card to view full post
- **Categories & Tags**: Click on categories or tags to filter posts

## What's Included

### Pages
- ✅ Home page with featured and recent posts
- ✅ Post detail page with comments
- ✅ Responsive sidebar with tags, categories, and popular posts
- 🚧 About, Contact, Categories, Search pages (placeholders)

### Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Comment system with nested replies
- ✅ Post categorization and tagging
- ✅ Author profiles
- ✅ Reading time estimation
- ✅ View count display
- ✅ Related posts suggestions

### Components Built
- **Layout**: Header, Footer, Sidebar
- **Post**: PostCard, CommentSection
- **Common**: Button, Input, Badge

### Mock Data
The app uses mock data for demonstration. Check:
- `src/services/mockData.ts` - Sample posts, users, categories, tags
- `src/services/api.ts` - API service layer (ready for real API integration)

## Next Steps

### To Connect to Your Real API

1. Open `src/services/api.ts`
2. Add your API base URL:
   ```typescript
   const API_BASE_URL = 'http://your-api.com/api';
   ```
3. Replace mock data calls with real fetch/axios calls
4. Update the delay function or remove it

### To Customize the Design

1. Open `src/index.css`
2. Modify CSS variables:
   ```css
   :root {
     --color-primary: #YOUR_COLOR;
     --font-sans: 'Your Font', sans-serif;
   }
   ```

### To Add New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

## Useful Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## File Structure Quick Reference

```
src/
├── components/
│   ├── common/          → Reusable UI components
│   ├── layout/          → Header, Footer, Sidebar
│   └── post/            → Post-specific components
├── pages/               → Page components
├── services/            → API calls and mock data
├── types/               → TypeScript definitions
├── utils/               → Helper functions
└── hooks/               → Custom React hooks
```

## Tips

- **Hot Module Replacement**: Changes automatically reflect in the browser
- **TypeScript**: Full type checking - your IDE will help with autocomplete
- **Mock Data**: Easy to modify in `src/services/mockData.ts`
- **Responsive**: Test on mobile by resizing your browser
- **Icons**: Using Lucide React - [Browse icons](https://lucide.dev/)

## Need Help?

- Check `README.md` for detailed documentation
- Review the code comments
- Check browser console for errors
- Ensure you're using Node.js 20.x or higher

---

Happy coding! 🚀
