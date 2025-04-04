import React from 'react' // Importing React library
import ReactDOM from 'react-dom/client' // Importing ReactDOM for rendering the application
import './global.css' // Importing global CSS styles
import { App } from './App.tsx' // Importing the main App component

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* HTML: Main application component wrapped in StrictMode for highlighting potential issues */}
    <App />
  </React.StrictMode>,
)