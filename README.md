# Portfolio Website

A modern, responsive React portfolio website showcasing projects, experience, and education.

## Features

- **Navigation**: Clean navigation with Main Page and Experience sections
- **Main Page**: Comprehensive portfolio with:
  - Hero section with personal introduction
  - Featured projects showcase
  - Professional experience timeline
  - Education background
- **Experience Page**: Detailed work experience and technical skills
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Modern Styling**: Gradient backgrounds, smooth animations, and clean typography

## Technologies Used

- React 18
- React Router DOM
- CSS3 with modern features
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd My_Profolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Navigation.js
│   └── Navigation.css
├── pages/
│   ├── MainPage.js
│   ├── MainPage.css
│   ├── Experience.js
│   └── Experience.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update the hero section in `MainPage.js` with your name, title, and description
2. **Projects**: Replace the sample projects in the projects section with your own work
3. **Experience**: Update the experience timeline with your work history
4. **Education**: Modify the education section with your academic background
5. **Skills**: Update the technical skills in the Experience page
6. **Styling**: Customize colors, fonts, and layout in the CSS files

## Deployment

The app can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service

Popular hosting options:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## License

This project is open source and available under the [MIT License](LICENSE).