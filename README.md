# Tanmay Tripathi - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a sleek dark theme and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, minimal dark theme with custom color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects
- **Fast**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe code for better development experience
- **Accessible**: Follows web accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## 🎨 Design System

### Color Palette
- **Background**: `#111827` (Gray-Blue Dark)
- **Surface**: `#1F2937` (Slightly Lighter Gray-Blue)
- **Text**: `#F3F4F6` (Off-White)
- **Accent**: `#38BDF8` (Sky Blue)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

## 🏗️ Project Structure

```
tanmay-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── icons.tsx
│       ├── MobileNav.tsx
│       └── ScrollToTop.tsx
├── public/
├── docs/
│   └── Resume_Tanmay_Tripathi.pdf
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tanmay-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information
Update the personal information in `src/app/page.tsx`:
- Name and title
- Email address
- LinkedIn profile URL
- GitHub profile URL
- Resume link
- Skills and technologies
- Work experience
- Projects
- Education details

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'dark-bg': '#111827',
  'dark-surface': '#1F2937',
  'dark-text': '#F3F4F6',
  'dark-accent': '#38BDF8',
  // Add your custom colors here
}
```

### Sections
The portfolio includes the following sections:
- **Hero**: Main introduction and call-to-action
- **About**: Personal description and traits
- **Skills**: Technical skills organized by category
- **Experience**: Work experience and internships
- **Projects**: Showcase of personal projects
- **Education & Activities**: Academic background and extracurricular activities
- **Contact**: Contact information and social links

### Adding New Projects
Add new projects to the projects array in `src/app/page.tsx`:
```typescript
{
  title: "Your Project Title",
  description: "Project description here",
  technologies: ["Tech1", "Tech2", "Tech3"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://your-demo.com",
  period: "MM/YYYY - MM/YYYY"
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with one click

### Other Platforms
The portfolio can be deployed on:
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting provider

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Optimized typography for all screen sizes
- Touch-friendly interactions

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Focus indicators
- Screen reader friendly

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📧 Contact

- **Email**: tanmaytrip59@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ by Tanmay Tripathi