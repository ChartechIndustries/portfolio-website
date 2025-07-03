# GoDaddy Deployment Guide for chartechindustries.org

## 🎯 Your Domain: chartechindustries.org

Your files have been updated with your actual domain. Now let's get your portfolio live!

---

## 📋 Step 1: Identify Your GoDaddy Hosting Plan

### How to Check Your Hosting Plan:

1. **Log into GoDaddy Account**
   - Go to [godaddy.com](https://godaddy.com)
   - Click "Sign In" in the top right
   - Enter your credentials

2. **Navigate to Hosting**
   - Click "My Products" or "Hosting"
   - Look for your hosting plan details

3. **Plan Types You Might See:**
   - **Shared Hosting** → Use File Manager (easiest)
   - **Website Builder** → Different process needed
   - **VPS/Dedicated** → FTP upload

---

## 🚀 Step 2: Upload Your Files

### Option A: Shared Hosting with cPanel (Most Common)

1. **Access File Manager**
   - In your GoDaddy hosting dashboard
   - Click "File Manager" or "cPanel"
   - Navigate to `public_html` folder

2. **Upload Files**
   - Select all files from your portfolio folder
   - Upload them to `public_html`
   - Ensure `index.html` is in the root directory

3. **File Structure Should Look Like:**
   ```
   public_html/
   ├── index.html          ← Your landing page
   ├── home.html           ← Main portfolio page
   ├── about.html          ← About page
   ├── project1.html       ← Project pages
   ├── project2.html
   ├── script.js           ← JavaScript
   ├── styles.css          ← CSS (if exists)
   ├── sitemap.xml         ← SEO file
   ├── robots.txt          ← SEO file
   └── 404.html            ← Error page
   ```

### Option B: Website Builder

If you have Website Builder, you'll need to:
1. Contact GoDaddy support to help migrate your HTML files
2. Or recreate the design using their builder tools

### Option C: FTP Upload (Advanced)

1. **Get FTP Credentials**
   - In your hosting dashboard
   - Look for "FTP Accounts" or "FTP Information"

2. **Use FTP Client**
   - Download FileZilla (free)
   - Connect using your FTP credentials
   - Upload files to `public_html`

---

## 🔒 Step 3: Enable SSL Certificate

1. **In GoDaddy Hosting Dashboard**
   - Look for "SSL Certificates" or "Security"
   - Click "Install SSL" or "Enable SSL"
   - Choose "Free SSL Certificate"

2. **Wait for Activation**
   - SSL activation takes 5-30 minutes
   - Your site will be available at `https://chartechindustries.org`

---

## 🧪 Step 4: Test Your Site

1. **Visit Your Site**
   - Go to `https://chartechindustries.org`
   - Test all navigation links
   - Check mobile responsiveness

2. **Common Issues to Check:**
   - [ ] All pages load correctly
   - [ ] Images display properly
   - [ ] Contact links work
   - [ ] Mobile design looks good

---

## 🔧 Step 5: DNS Configuration (If Needed)

If your domain isn't pointing to your hosting:

1. **In GoDaddy Domain Dashboard**
   - Go to "DNS Management"
   - Look for A record pointing to your hosting IP
   - If missing, add A record with hosting IP

2. **Contact GoDaddy Support** if you need help with DNS

---

## 📞 GoDaddy Support Contacts

- **Phone:** 1-866-938-1119
- **Live Chat:** Available in your GoDaddy dashboard
- **Help Center:** [help.godaddy.com](https://help.godaddy.com)

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Site loads at `https://chartechindustries.org`
- [ ] All pages accessible
- [ ] SSL certificate active (green lock in browser)
- [ ] Mobile responsive
- [ ] Contact information updated
- [ ] Project images uploaded

---

## 🚨 Troubleshooting

### Site Not Loading:
1. Check if files are in `public_html` folder
2. Verify `index.html` is in root directory
3. Contact GoDaddy support

### SSL Issues:
1. Wait 30 minutes for SSL activation
2. Clear browser cache
3. Try accessing with `https://`

### Broken Links:
1. Check file paths in your HTML files
2. Ensure all files uploaded correctly
3. Test each page individually

---

**Need Immediate Help?** Call GoDaddy support at 1-866-938-1119 - they're very helpful with deployment issues! 