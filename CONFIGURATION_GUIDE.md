# Portfolio Configuration Guide

## Overview
Your 2026 portfolio is now fully dynamic with live integrations for GitHub repositories and blog RSS feeds. All ButterCMS dependencies have been removed.

---

## 🔧 Configuration Settings

### 1. GitHub Repositories
**File:** `src/components/GitHubPinnedRepos.jsx`

```javascript
const GITHUB_USERNAME = 'hasnainmakada-99';
```

**What it does:**
- Fetches your 6 most recent repositories from GitHub
- Auto-updates when you push new repos or update existing ones
- Shows: Repository name, description, language, stars, and forks
- No manual updates needed!

**To customize:**
- Change `GITHUB_USERNAME` to your GitHub username
- API endpoint: `https://api.github.com/users/${username}/repos`

---

### 2. Blog RSS Feeds
**File:** `src/components/Blogs2026.jsx`

```javascript
const DEV_TO_USERNAME = 'hasnainmakada';
const HASHNODE_BLOG_URL = 'hasnainm.hashnode.dev';
```

**RSS Feed URLs:**
- **Dev.to:** `https://dev.to/feed/${DEV_TO_USERNAME}`
- **Hashnode:** `https://${HASHNODE_BLOG_URL}/rss.xml`

**What it does:**
- Fetches your top 5 most recent blog posts from each platform
- Extracts cover images, descriptions, and reading times
- Auto-updates when you publish new articles
- No CMS required!

**To customize:**
- Update `DEV_TO_USERNAME` to your Dev.to username
- Update `HASHNODE_BLOG_URL` to your Hashnode subdomain

---

### 3. Personal Information
**Files to update with your details:**

#### Home Component (`src/components/Home2026.jsx`)
```javascript
// Line ~151: Greeting text
Hey Everyone,

// Line ~160-180: Name, title, description
I'm Hasnain Makada
Full Stack Developer & AI Enthusiast
```

#### About Component (`src/components/About2026.jsx`)
```javascript
// Line ~135-150: About description paragraphs
Update the 3 paragraphs with your personal story

// Line ~165: Blog platform links
Hashnode: https://hasnainm.hashnode.dev
Dev.to: https://dev.to/hasnainmakada
```

#### Footer Component (`src/components/Footer2026.jsx`)
```javascript
// Social links array (line ~11-17)
{ icon: <FaGithub />, href: 'https://github.com/hasnainmakada-99' }
{ icon: <FaTwitter />, href: 'https://x.com/Hasnain_Makada' }
{ icon: <FaLinkedin />, href: 'https://linkedin.com/in/hasnainmakada-99' }
{ icon: <SiHashnode />, href: 'https://hasnainm.hashnode.dev' }
{ icon: <SiDevdotto />, href: 'https://dev.to/hasnainmakada' }
{ icon: <FaEnvelope />, href: 'mailto:hasnainmakada@gmail.com' }
```

#### Contact Component (`src/components/Contact.jsx`)
```javascript
// Contact links array (line ~9-28)
Update GitHub, LinkedIn, Twitter, and Email URLs
```

---

### 4. Skills Configuration
**File:** `src/components/Skills2026.jsx`

**Skill Categories:**
- Frontend Development
- Backend Development  
- Mobile Development
- Tools & Platforms
- Always Learning (Gen AI section)

**To customize:**
- Update `defaultSkills` array (line ~108)
- Add/remove skills from each category
- Icons are automatically mapped from the `skillIcons` object (60+ technologies supported)

**Always Learning Section:**
Current AI technologies (line ~118-127):
- Generative AI 🤖
- ChatGPT API 💬
- Claude AI 🧠
- Gemini AI ✨
- Stable Diffusion 🎨
- LangChain 🔗
- Vector Databases 📊
- AI Agents 🤝

---

### 5. Projects/Works
**File:** `src/components/Works.jsx`

```javascript
// Update the projects array (line ~9-25)
const projects = [
  {
    work_title: "Project Name",
    work_description: "Brief description",
    work_tech_stack: ["React", "Node.js", "MongoDB"],
    work_links: "https://github.com/username/repo"
  }
];
```

---

## 🎨 Theme Customization

### Color Palette
**File:** `src/index.css`

```css
/* Light Theme */
--bg-primary: #ffffff;
--accent-primary: #3b82f6;
--accent-secondary: #8b5cf6;

/* Dark Theme */
--bg-primary-dark: #0a0e1a;
--accent-primary-dark: #60a5fa;
--accent-secondary-dark: #a78bfa;
```

### Animations
Pre-built animations available:
- `gradient-shift` - Color gradients
- `float-gentle` - Floating elements
- `glow-pulse` - Glowing effects
- `shimmer` - Text shimmer
- `blob-animation` - Morphing blobs

---

## 🚀 Deployment Tips

### Before Deploying:
1. **Update all personal URLs and usernames**
2. **Test RSS feeds are working:**
   ```bash
   # Check Dev.to feed
   curl https://dev.to/feed/hasnainmakada
   
   # Check Hashnode feed  
   curl https://hasnainm.hashnode.dev/rss.xml
   ```

3. **Verify GitHub API:**
   ```bash
   curl https://api.github.com/users/hasnainmakada-99/repos
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

### Environment Variables (Optional)
Create `.env` file for sensitive data:
```env
VITE_GITHUB_USERNAME=hasnainmakada-99
VITE_DEVTO_USERNAME=hasnainmakada
VITE_HASHNODE_URL=hasnainm.hashnode.dev
VITE_EMAIL=hasnainmakada@gmail.com
```

Then use in components:
```javascript
const username = import.meta.env.VITE_GITHUB_USERNAME;
```

---

## 📊 API Rate Limits

### GitHub API:
- **Unauthenticated:** 60 requests/hour
- **Authenticated:** 5,000 requests/hour
- **Recommendation:** Add GitHub token for higher limits

To add authentication:
```javascript
// In GitHubPinnedRepos.jsx
const response = await fetch(url, {
  headers: {
    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});
```

### RSS Feeds:
- No rate limits
- Cached by browsers
- Updates on page refresh

---

## 🔍 Troubleshooting

### Blogs not loading?
1. Check RSS feed URLs in browser
2. Verify username/blog URL is correct
3. Check console for CORS errors

### GitHub repos not showing?
1. Verify GitHub username is correct
2. Check if repos are public
3. Monitor API rate limits in browser console

### Skills icons missing?
- All 60+ icons are pre-mapped
- If a skill icon is missing, add to `skillIcons` object in `Skills2026.jsx`

---

## 📝 Content Update Workflow

### Adding a New Blog Post:
1. Publish on Dev.to or Hashnode
2. Portfolio auto-updates on next visit (RSS feed refresh)
3. No code changes needed!

### Adding a New Repository:
1. Create/update repo on GitHub
2. Portfolio auto-fetches latest 6 repos
3. No code changes needed!

### Adding a New Skill:
1. Open `src/components/Skills2026.jsx`
2. Add skill to appropriate category in `defaultSkills`
3. If icon is missing, add to `skillIcons` object
4. Save and refresh

---

## 🎯 Quick Checklist

Before going live:
- [ ] Updated GitHub username
- [ ] Updated Dev.to username  
- [ ] Updated Hashnode blog URL
- [ ] Updated email address
- [ ] Updated social media links (Twitter, LinkedIn)
- [ ] Customized About section text
- [ ] Added your actual projects to Works
- [ ] Tested all links work
- [ ] Tested on mobile devices
- [ ] Ran `npm run build` successfully

---

## 💡 Tips

1. **RSS feeds cache:** Browsers may cache RSS feeds. Use Ctrl+Shift+R for hard refresh
2. **GitHub API:** Consider using GraphQL API for more control over pinned repos
3. **Performance:** Images are optimized, but consider adding lazy loading for blog cover images
4. **SEO:** Add meta tags for better social media sharing
5. **Analytics:** Consider adding Google Analytics or Plausible for visitor tracking

---

## 🆘 Need Help?

- GitHub API docs: https://docs.github.com/en/rest
- RSS-Parser docs: https://www.npmjs.com/package/rss-parser
- Dev.to API: https://developers.forem.com/api
- Hashnode API: https://api.hashnode.com/

---

**Last Updated:** December 2024
**Portfolio Version:** 2026 Edition
**Tech Stack:** React 18 + Vite + Framer Motion + GSAP
