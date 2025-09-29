# Quick Build Instructions

## For Immediate Deployment

### 1. Build the Project
```bash
npm run build
```

### 2. Upload These Files to IONOS
After building, upload everything from the `dist` folder to your IONOS web root directory:

```
Upload to your web root (e.g., /htdocs/ or /public_html/):
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other generated files]
└── [any other files from dist folder]
```

### 3. Create .htaccess File
Create this file in your web root directory:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain text/html text/xml text/css application/xml application/xhtml+xml application/rss+xml application/javascript application/x-javascript
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
</IfModule>

# Handle routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

### 4. Test Your Site
Visit your domain to see the new portfolio in action!

## File Transfer Methods

### Option 1: IONOS File Manager
1. Login to IONOS control panel
2. Go to "Websites & Domains"
3. Select "File Manager"
4. Upload files to web root directory

### Option 2: FTP Client
1. Use FileZilla, WinSCP, or similar
2. Connect with your IONOS FTP credentials
3. Upload files to web root directory

---

**That's it!** Your beautiful new portfolio should now be live on your IONOS hosting.
