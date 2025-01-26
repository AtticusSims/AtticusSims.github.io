# HKBU Interactive Banner Application

An interactive web application that displays an interactive banner for Hong Kong Baptist University, allowing users to explore different regions of the banner with clickable hotspots that link to relevant university resources.

## Features

- **Interactive Banner Viewer**: Navigate and explore the HKBU banner with clickable regions
- **Admin Interface**: Secure management interface for banner hotspots and their associated links
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
  - `/admin` - Admin interface for managing banner regions
    - `page.tsx` - Admin page component with authentication and URL management
    - `admin.module.css` - Styles for admin interface
  - `/api` - API routes
    - `/banner-coords` - Endpoints for managing banner coordinates
    - `/update-credentials` - Endpoint for updating admin credentials
  - `/banner` - Banner viewer component
  - `/components` - Reusable React components
- `/public` - Static assets including images and SVGs
- `/out` - Production build output

## Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## Features in Detail

### Banner Viewer

- Interactive navigation of the banner image
- Clickable regions that link to relevant university resources
- Smooth zoom and pan functionality
- Responsive design for all device sizes

### Admin Interface

The admin interface provides secure management of banner hotspot URLs and admin credentials. It is protected by a username/password authentication system.

#### File Structure

- `app/admin/page.tsx` - Main admin interface component
- `app/admin/admin.module.css` - Admin interface styling
- `app/api/banner-coords/route.ts` - API endpoint for banner coordinates
- `app/api/update-credentials/route.ts` - API endpoint for credential management
- `.env.local` - Environment file for storing admin credentials

#### Authentication

The admin interface uses environment variables for secure authentication:

- Credentials are stored in `.env.local`
- Default credentials: username: `admin`, password: `admin`
- Credentials can be changed through the admin interface

#### Managing Banner URLs

1. Access the admin interface at `/admin`
2. Log in with admin credentials
3. Each banner region is displayed with its subject name and current URL
4. Edit URLs directly in the input fields
5. Click "Save Changes" to update the coordinates file
6. Changes are immediately reflected in the banner viewer

#### Updating Admin Credentials

1. Log in to the admin interface
2. Click "Change Credentials" in the header
3. Enter new username and password
4. Submit the form to update credentials
5. Log in again with the new credentials

#### Security Notes

- The `.env.local` file should be backed up securely
- This file should never be committed to version control
- For production deployment, use secure environment variable management
- Consider implementing additional security measures for production use

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
