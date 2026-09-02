/**
 * NEXUS GAMING TH - High-Performance Build & Bundler Script
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 [1/2] Bundling JavaScript with esbuild...');
execSync('npx -y esbuild js/app.js --bundle --outfile=js/bundle.js --format=esm', {
  stdio: 'inherit',
  cwd: __dirname
});

console.log('⚡ [2/2] Injecting bundle into index.html for zero-latency fail-safe deployment...');
const bundleContent = fs.readFileSync(path.join(__dirname, 'js/bundle.js'), 'utf8');
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Replace script tag in index.html with inline self-contained module script
const scriptTagRegex = /<script\s+type=["']module["'](?:\s+id=["']nexus-app-bundle["'])?(?:\s+src=["'][^"']+["'])?>[\s\S]*?<\/script>/i;

const inlineScript = `<script type="module" id="nexus-app-bundle">\n${bundleContent}\n</script>`;

if (scriptTagRegex.test(html)) {
  html = html.replace(scriptTagRegex, inlineScript);
} else {
  // If not found, insert before </body>
  html = html.replace('</body>', `${inlineScript}\n</body>`);
}

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('✅ Build complete! index.html and js/bundle.js are fully synced.');
