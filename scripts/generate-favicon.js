
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PawPrint } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateFavicon = async () => {
  // Create SVG string from PawPrint icon
  const pawPrintSvg = ReactDOMServer.renderToStaticMarkup(
    PawPrint({ 
      color: '#A4BE7B', // Using the paws-green color from tailwind config
      size: 256, 
      strokeWidth: 1.5 
    })
  );

  // Convert SVG to PNG
  await sharp(Buffer.from(pawPrintSvg))
    .resize(32, 32)
    .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));

  console.log('Favicon generated successfully!');
};

generateFavicon();
