# Google Profile Dashboard

A modern dashboard for managing Google profiles. Built with Next.js and Tailwind CSS.

![Dashboard Preview](public/dashboard-preview.png)

## Features

- Clean, modern UI with responsive design
- Dashboard overview with statistics and visualizations
- Profile management system
- Activity tracking and reporting
- Interactive charts and graphs

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Chart.js**: JavaScript charting library
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd google-profile-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
google-profile-dashboard/
├── app/                # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page component
├── components/         # Reusable components
│   ├── Chart.tsx       # Chart component
│   ├── Header.tsx      # Header component
│   ├── ProfilesTable.tsx # Table component
│   ├── Sidebar.tsx     # Sidebar component
│   └── StatsCard.tsx   # Statistics card component
├── public/             # Static assets
├── styles/             # Style modules
└── package.json        # Project dependencies
```

## License

MIT
