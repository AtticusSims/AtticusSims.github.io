# HKBU Interactive Banner Application

An interactive web application that displays an interactive banner for Hong Kong Baptist University, allowing users to explore different regions of the banner with clickable hotspots that link to relevant university resources.

## Features

- **Interactive Banner Viewer**: Navigate and explore the HKBU banner with clickable regions
- **Responsive Design**: Optimized for various screen sizes and devices
- **Zoom & Pan**: Smooth zoom and pan functionality for detailed banner exploration

## Technology Stack

- Next.js
- TypeScript
- CSS Modules
- GitHub Pages (for deployment)

## Typography

The application uses the Univers LT STD font family:

- **Univers LT STD Condensed** - Primary font for navigation and UI elements
- **Univers LT STD Light Condensed** - Body text and secondary information
- **Univers LT STD Bold Condensed** - Headings and emphasis

Font files are located in the `public/fonts` directory:

- `UniversLTStd-Cn.woff` - Regular condensed variant
- `UniversLTStd-LightCn.woff` - Light condensed variant
- `UniversLTStd-BoldCn.woff` - Bold condensed variant

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd hkbu-image-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

- `/app` - Main application components and pages
  - `/banner` - Banner viewer component
  - `/components` - Reusable React components
- `/public` - Static assets including images and SVGs
  - `/data` - Static JSON data for banner coordinates
  - `/fonts` - Typography assets
  - `/img` - Banner and other image assets
- `/out` - Production build output

## Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## Features in Detail

### Banner Viewer

- Interactive navigation of the banner image
- Clickable regions that link to relevant university resources
- Smooth zoom and pan functionality
- Responsive design for all device sizes

### Banner Coordinates

The banner coordinates and URLs are stored in a static JSON file at `public/data/banner-coords.json`. Each region in the banner is defined by:

- Subject name
- URL
- Coordinates (x, y, width, height)
