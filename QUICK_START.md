# Quick Start Guide

## How to Run Your Portfolio Locally

Since Node.js is not in your system PATH, use one of these methods:

### Method 1: Simple Command (Copy & Paste)

Open PowerShell in the project folder and run:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path" ; npx vite
```

### Method 2: Using VS Code Terminal

1. Open the project folder in VS Code
2. Open a new terminal (Terminal → New Terminal)
3. Paste this command:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path" ; npx vite
```

### Method 3: Fix PATH Permanently (Recommended)

Add Node.js to your system PATH so you can just run `npm run dev`:

1. Press Windows + X → System
2. Click "Advanced system settings"
3. Click "Environment Variables"
4. Under "System variables", find "Path"
5. Click "Edit" → "New"
6. Add: `C:\Program Files\nodejs`
7. Click OK on all windows
8. **Restart VS Code**
9. Then you can simply run: `npm run dev`

## Current Status

✅ **Server is running at:** http://localhost:5173/

## Commands Available (after fixing PATH)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Troubleshooting

**"npm not found" error?**
- Use the full command with `$env:Path` prefix
- Or fix your PATH permanently (Method 3)

**Port 5173 already in use?**
- Kill the existing process
- Or Vite will automatically use port 5174

**Changes not showing?**
- Vite has Hot Module Replacement (HMR)
- Save your files and the browser auto-updates
- If stuck, refresh the browser (F5)

## Need Help?

The project is fully set up and working. Just use the commands above to start developing!
