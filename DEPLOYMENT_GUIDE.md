# IONOS Deployment Implementation Guide
## Updating Your Eric Olason Portfolio Website

This guide will walk you through deploying your new React-based portfolio to IONOS hosting.

## 📋 Prerequisites

Before starting, ensure you have:
- Access to your IONOS hosting control panel
- FTP/SFTP credentials for your hosting account
- Node.js installed on your local machine (for building the project)
- The project files from this development environment

## 🏗️ Step 1: Build the Production Version

### 1.1 Install Dependencies (if not already done)
```bash
npm install
```

### 1.2 Build the Production Files
```bash
npm run build
```

This creates a `dist` folder containing all the optimized files for production.

## 📁 Step 2: Prepare Files for Upload

### 2.1 Locate Build Files
After running `npm run build`, you'll find these files in the `dist` folder:
- `index.html` (main HTML file)
- `assets/` folder (contains CSS, JS, and other assets)
- Any other static files

### 2.2 File Structure Overview
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other assets]
└── [any other static files]
```

## 🌐 Step 3: Access Your IONOS Hosting

### 3.1 Login Methods
You can access your IONOS hosting via:

**Option A: IONOS Control Panel**
1. Go to [ionos.com](https://www.ionos.com)
2. Login to your account
3. Navigate to "Websites & Domains"
4. Select your domain
5. Go to "File Manager" or "Web Space"

**Option B: FTP/SFTP Client**
1. Use an FTP client like FileZilla, WinSCP, or Cyberduck
2. Connect using your IONOS FTP credentials:
   - Host: Your domain or FTP server address
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

### 3.2 Locate Your Web Root Directory
Common web root directories on IONOS:
- `/` (root)
- `/htdocs/`
- `/public_html/`
- `/www/`

## 📤 Step 4: Upload Your Files

### 4.1 Backup Current Site (Important!)
Before uploading, backup your current website:
1. Download all existing files to a local backup folder
2. Name it something like `backup_[current_date]`

### 4.2 Clear Old Files (Optional but Recommended)
If you want a clean deployment:
1. Delete old website files (keep your backup!)
2. Leave any important files like:
   - `.htaccess` (if you have custom redirects)
   - Email-related folders
   - Any other non-website files

### 4.3 Upload New Files
1. Upload ALL contents from the `dist` folder to your web root directory
2. Ensure the file structure is maintained:
   ```
   Your Web Root/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].css
   │   ├── index-[hash].js
   │   └── [other assets]
   └── [any other files]
   ```

## ⚙️ Step 5: Configure Server Settings

### 5.1 Create/Update .htaccess File
Create a `.htaccess` file in your web root with the following content:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Handle client-side routing (if needed in future)
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

### 5.2 Verify File Permissions
Ensure proper file permissions:
- Folders: 755
- Files: 644
- .htaccess: 644

## 🧪 Step 6: Test Your Website

### 6.1 Initial Testing
1. Visit your domain in a web browser
2. Check that the site loads correctly
3. Test navigation between sections
4. Verify all images load properly
5. Test the contact form (note: it currently logs to console)

### 6.2 Cross-Browser Testing
Test your site in:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

### 6.3 Mobile Responsiveness
Test on various screen sizes:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

## 🔧 Step 7: Post-Deployment Configuration

### 7.1 Contact Form Setup
The current contact form logs to the browser console. To make it functional:

**Option A: Use a Form Service**
- Formspree.io
- Netlify Forms
- EmailJS

**Option B: Server-Side Processing**
- Create a PHP script to handle form submissions
- Set up email forwarding through IONOS

### 7.2 Analytics Setup (Optional)
Add Google Analytics or similar:
1. Get your tracking code
2. Add it to the `index.html` file before deployment

### 7.3 SEO Optimization
The site includes basic SEO elements, but you may want to:
- Add a sitemap.xml
- Configure robots.txt
- Set up Google Search Console

## 🚨 Troubleshooting Common Issues

### Issue 1: Site Not Loading
**Possible Causes:**
- Files uploaded to wrong directory
- Missing index.html file
- Server configuration issues

**Solutions:**
- Verify files are in the correct web root directory
- Check file permissions
- Contact IONOS support if needed

### Issue 2: CSS/JS Not Loading
**Possible Causes:**
- Assets folder not uploaded
- Incorrect file paths
- Server blocking file types

**Solutions:**
- Ensure the entire `assets` folder is uploaded
- Check .htaccess configuration
- Verify file permissions

### Issue 3: Images Not Displaying
**Possible Causes:**
- Image URLs pointing to development server
- Missing image files
- Incorrect file paths

**Solutions:**
- All images in the portfolio use external URLs (should work)
- Verify image URLs are accessible
- Check browser console for 404 errors

### Issue 4: Contact Form Not Working
**Expected Behavior:**
- Currently logs form data to browser console
- No actual email sending functionality yet

**Next Steps:**
- Implement server-side form processing
- Use a third-party form service

## 📞 Support Resources

### IONOS Support
- Help Center: [ionos.com/help](https://www.ionos.com/help)
- Phone Support: Available through your control panel
- Live Chat: Available in control panel

### Development Support
If you encounter issues with the React application itself:
- Check browser console for JavaScript errors
- Verify all dependencies are included in the build
- Test locally with `npm run dev` first

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All files uploaded successfully
- [ ] Website loads at your domain
- [ ] Navigation works correctly
- [ ] All sections display properly
- [ ] Images load correctly
- [ ] Mobile responsiveness works
- [ ] Contact form displays (even if not functional yet)
- [ ] No console errors in browser
- [ ] .htaccess file configured
- [ ] File permissions set correctly
- [ ] Backup of old site created

## 🔄 Future Updates

To update your site in the future:
1. Make changes in the development environment
2. Run `npm run build`
3. Upload new files from the `dist` folder
4. Clear browser cache to see changes

## 📧 Next Steps for Full Functionality

1. **Contact Form**: Implement server-side processing or use a form service
2. **Portfolio Links**: Update portfolio item links to point to actual project pages
3. **Analytics**: Add tracking if desired
4. **SEO**: Optimize for search engines
5. **Performance**: Monitor and optimize loading speeds

---

**Need Help?** If you encounter any issues during deployment, document the specific error messages and contact IONOS support or refer back to this guide.
