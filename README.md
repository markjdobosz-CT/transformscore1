# Fundraising Assessment Pro

A professional web application to help fundraisers transform their approach from organization-centered to donor-centered strategies.

## 🎯 Features

- **Interactive Assessment**: 8-question evaluation of fundraising approach
- **Personalized Results**: Scoring with tailored recommendations
- **Sharing System**: Easy URL sharing with personalization options
- **Private Analytics**: Admin dashboard to track anonymous results
- **Professional Design**: Modern UI with smooth animations
- **Mobile Responsive**: Works perfectly on all devices

## 🚀 Quick Deploy to Vercel

1. **Fork/Clone this repository**
2. **Go to [vercel.com](https://vercel.com)**
3. **Sign up for free account**
4. **Click "New Project"**
5. **Import from GitHub** (select this repository)
6. **Click "Deploy"**
7. **Get your live URL!**

## 🔑 Admin Access

- **Password**: `admin123`
- **Access**: Click "Admin" in sidebar → Enter password
- **Features**: View anonymous analytics, completion tracking, score distributions

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📊 What Gets Tracked (Anonymously)

- Assessment completion rates
- Score distributions
- Result categories
- Sharing effectiveness
- No personal information stored

## 🔧 Customization

### Change Admin Password
Edit `src/services/adminService.ts`:
```typescript
const ADMIN_PASSWORD = 'your-new-password';
```

### Update Branding
- Copyright: Already set to "Mark Dobosz 2025"
- Colors: Modify `tailwind.config.js`
- Content: Edit page files in `src/pages/`

## 📱 How Users Access

- **Desktop**: Open web browser → go to your Vercel URL
- **Mobile**: Works like a native app in any mobile browser
- **Sharing**: Use built-in Quick Share or Custom Share buttons

## 🎨 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: ShadCN/UI + Tailwind CSS
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📄 License

© 2025 Mark Dobosz. All rights reserved.

## 🆘 Support

This assessment is based on donor-centered fundraising principles that focus on building authentic relationships through curiosity about donor interests rather than leading with organizational needs.

---

**Ready to transform your fundraising approach? Deploy and start sharing!** 🚀