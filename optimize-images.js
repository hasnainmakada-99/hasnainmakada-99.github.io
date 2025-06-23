const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  try {
    // Create optimized directory if it doesn't exist
    const outputDir = 'src/assets/optimized';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Optimize PNG to WebP
    await imagemin(['src/assets/Portfolio_Image.png'], {
      destination: outputDir,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });

    // Create a smaller PNG version as fallback
    await imagemin(['src/assets/Portfolio_Image.png'], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
          strip: true
        })
      ]
    });

    console.log('Images optimized successfully!');
    
    // Check file sizes
    const originalSize = fs.statSync('src/assets/Portfolio_Image.png').size;
    const webpSize = fs.statSync(path.join(outputDir, 'Portfolio_Image.webp')).size;
    const pngSize = fs.statSync(path.join(outputDir, 'Portfolio_Image.png')).size;
    
    console.log(`Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Optimized PNG: ${(pngSize / 1024 / 1024).toFixed(2)}MB`);
    
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();