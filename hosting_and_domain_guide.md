# 🚀 Hosting & Custom Domain Guide: Zestelle Foods

This guide explains how to deploy your website to Vercel and connect your Hostinger domain.

## 1. Preparing the Project
I have already added two files to your project to ensure routing works perfectly on hosted platforms:
- `vercel.json`: Ensures React Router works on Vercel.
- `public/_redirects`: Ensures React Router works on Netlify.

---

## 2. Deploying to Vercel

### Recommended: GitHub Integration (Continuous Deployment)
1. Push your code to a **GitHub** repository.
2. Log in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **Add New > Project** and import your repository.
4. Click **Deploy**. Vercel will automatically build your site every time you push changes to GitHub.

---

## 3. Connecting Hostinger Domain
Once your project is deployed on Vercel, follow these steps to use your custom domain.

### Step A: Add Domain in Vercel
1. Go to your **Vercel Dashboard > Settings > Domains**.
2. Type your domain (e.g., `zestellefoods.com`) and click **Add**.

### Step B: Update DNS in Hostinger
Log in to your **Hostinger hPanel > Domains > DNS / Nameservers** and add these records:

| Type | Name (Host) | Value (Points to) | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Main domain |
| **CNAME** | `www` | `cname.vercel-dns.com` | www version |

> **Note:** If there are existing `A` records for `@`, delete them before adding the Vercel one.

---

## 4. Moving to another Host (Portability)
If you decide to leave Vercel in the future, don't worry! 
1. Your domain is **yours** in Hostinger.
2. To move, you simply go back to the Hostinger DNS settings.
3. Replace the Vercel IP (`76.76.21.21`) with the IP of your new hosting provider.
4. Your site will instantly start pointing to the new location.

---

## 5. Local Testing
Before you deploy, you can test the "Production" version on your own computer:
1. Open your terminal in this folder.
2. Run: `npm run build`
3. Run: `npm run preview`
This lets you see exactly what users will see on the live website.
