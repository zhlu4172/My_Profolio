# Images Directory

This directory contains static images used in the portfolio website.

## File Structure
```
public/
├── images/
│   ├── usyd-logo.png          # University of Sydney logo
│   ├── project-images/        # Project screenshots and images
│   └── profile-images/        # Profile and personal images
├── index.html
└── manifest.json
```

## How to Add Images

1. **University/Company Logos**: Place logos in the root `images/` directory
   - Example: `usyd-logo.png`, `company-logo.png`

2. **Project Images**: Place project screenshots in `images/project-images/`
   - Example: `project1-screenshot.png`, `project2-demo.png`

3. **Profile Images**: Place personal photos in `images/profile-images/`
   - Example: `profile-photo.jpg`, `headshot.png`

## Usage in Code

Images in the `public/images/` directory can be referenced directly in your React components:

```jsx
// University logo
<img src="/images/usyd-logo.png" alt="University Logo" />

// Project image
<img src="/images/project-images/my-project.png" alt="Project Screenshot" />

// Profile image
<img src="/images/profile-images/profile.jpg" alt="Profile Photo" />
```

## Recommended Image Formats

- **Logos**: PNG (with transparency) or SVG
- **Screenshots**: PNG or JPG
- **Photos**: JPG or WebP
- **Icons**: SVG or PNG

## Image Optimization

For best performance, consider:
- Compressing images before adding them
- Using appropriate dimensions (don't use oversized images)
- Using WebP format for photos when possible
- Keeping file sizes under 500KB when possible
