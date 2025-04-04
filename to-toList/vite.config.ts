// Objective:
// Configure Vite to set up the development environment for a React project.

// Why:
// Provides a fast and optimized development server with support for React and modern JavaScript features.

// Result:
// Sets up Vite with React plugins and custom server configurations, such as the development server port.

// How to implement:
// Place this file in the root of the project. Vite will automatically use this configuration when running the development server.

import { defineConfig } from 'vite' // Importing Vite's configuration function
import react from '@vitejs/plugin-react' // Importing the React plugin for Vite

// Exporting the Vite configuration
export default defineConfig({
  plugins: [react()], // Adding the React plugin to enable React support
  server: {
    port: 3000, // Configuring the development server to run on port 3000
  }
})