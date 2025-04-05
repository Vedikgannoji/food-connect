
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Using the recommended approach for React 19
const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />);
}
