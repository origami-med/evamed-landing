# Deployment Configuration for SPA Routing

This project uses Vue Router with history mode, which requires server configuration to handle client-side routing properly.

## Configuration Files Created

The following files have been created to support different hosting platforms:

### 1. `public/_redirects` (Netlify)
- Automatically redirects all routes to `index.html`
- Works out of the box with Netlify

### 2. `vercel.json` (Vercel)
- Rewrites all routes to `index.html`
- Works out of the box with Vercel

### 3. `public/.htaccess` (Apache)
- Rewrites all routes to `index.html` for Apache servers
- Requires `mod_rewrite` to be enabled

### 4. `public/404.html` (GitHub Pages)
- Fallback for GitHub Pages (though hash mode is recommended)

## Hosting Platform Setup

### Netlify
✅ **Automatic** - The `_redirects` file will be automatically used. No additional configuration needed.

### Vercel
✅ **Automatic** - The `vercel.json` file will be automatically used. No additional configuration needed.

### Apache
1. Ensure `mod_rewrite` is enabled
2. The `.htaccess` file will be automatically used
3. Make sure your Apache config allows `.htaccess` overrides:
   ```apache
   <Directory /path/to/your/site>
       AllowOverride All
   </Directory>
   ```

### Nginx
Add this to your Nginx configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### GitHub Pages
GitHub Pages doesn't support server-side redirects well. You have two options:

**Option 1: Use Hash Mode (Recommended for GitHub Pages)**
Update `src/router.js` to use hash mode:
```javascript
import { createRouter, createWebHashHistory } from 'vue-router';
// Change createWebHistory to createWebHashHistory
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
```

**Option 2: Use 404.html workaround**
The `public/404.html` file has been created, but hash mode is more reliable.

### Other Platforms
Most modern hosting platforms support SPA routing. Check your platform's documentation for:
- "SPA routing" or "Single Page Application" configuration
- "Fallback to index.html" or "Catch-all route" settings

## Testing

After deployment, test these URLs:
- `https://yourdomain.com/` - Should show homepage
- `https://yourdomain.com/privacy` - Should show privacy modal
- `https://yourdomain.com/terms` - Should show terms modal
- `https://yourdomain.com/any-random-path` - Should redirect to homepage

## Troubleshooting

If routes still don't work:
1. Check that the configuration file for your platform is in the correct location
2. Verify that your build process copies files from `public/` to the output directory
3. For GitHub Pages, consider switching to hash mode (see above)
4. Check server logs for any errors
