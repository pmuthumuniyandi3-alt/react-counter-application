import fs from 'fs';
import path from 'path';

// 1. Copy dist/dev.html to index.html (root entry for GitHub Pages)
if (fs.existsSync('dist/dev.html')) {
  fs.copyFileSync('dist/dev.html', 'index.html');
  fs.copyFileSync('dist/dev.html', 'dist/index.html');
}

// 2. Ensure assets/ directory at root has latest bundled assets
if (fs.existsSync('dist/assets')) {
  if (!fs.existsSync('assets')) {
    fs.mkdirSync('assets', { recursive: true });
  }
  for (const file of fs.readdirSync('dist/assets')) {
    fs.copyFileSync(path.join('dist/assets', file), path.join('assets', file));
  }
}

// 3. Ensure docs/ directory has complete build for GitHub Pages docs deployment
if (fs.existsSync('dist')) {
  fs.cpSync('dist', 'docs', { recursive: true });
}

console.log('Postbuild sync complete: index.html, assets/, and docs/ are ready for GitHub Pages.');
