# Troubleshooting Guide for Clinks App

## Common Issues and Solutions

### 1. App Won't Start

**Solution 1: Clear Metro Cache**
```bash
cd "/Users/user/Documents/01_Active/Personal_Projects/Nightlife Project/clinks"
npx expo start --clear
```

**Solution 2: Reset npm and Metro**
```bash
rm -rf node_modules
rm -rf .expo
npm install
npx expo start
```

**Solution 3: Kill existing processes**
```bash
pkill -f "expo start"
npx expo start
```

### 2. Port Already in Use Error

```bash
lsof -ti:8081 | xargs kill -9
npx expo start
```

### 3. Dependency Issues

**Fix Expo dependencies:**
```bash
npx expo install --fix
```

**Clean install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### 4. Environment Variables Not Loading

Make sure your `.env` file is in the root directory with:
```
EXPO_PUBLIC_GOOGLE_API_KEY=your_key_here
EXPO_PUBLIC_FIREBASE_API_KEY=your_key_here
```

### 5. iOS/Android Specific Issues

**For iOS:**
- Make sure you have Xcode installed
- Try: `npx expo run:ios`

**For Android:**
- Make sure you have Android Studio installed
- Try: `npx expo run:android`

**For Expo Go:**
- Use: `npx expo start` (standard mode)
- Scan QR code with Expo Go app

### 6. Build Errors

**Check for syntax errors:**
```bash
npx expo doctor
```

**Test specific files:**
```bash
node -e "require('./App.js')"
```

## Current App Status

✅ **Working Features:**
- App configuration is correct
- All dependencies are installed
- Firebase configuration is set up
- Google API keys are configured
- Metro bundler starts successfully

⚠️ **Known Issues:**
- SDK version is older (49) - consider upgrading to SDK 50+
- Web dependencies not installed (only needed for web platform)

## Quick Start Commands

```bash
# Standard Expo Go development
npx expo start

# Clear cache if needed
npx expo start --clear

# Run on specific platform
npx expo start --ios
npx expo start --android

# Web development (requires additional dependencies)
npx expo install react-native-web react-dom @expo/webpack-config
npx expo start --web
```

## Getting Help

If none of these solutions work, please share:
1. The exact error message you're seeing
2. What platform/device you're trying to run on
3. Your operating system version
4. Whether you're using Expo Go or a development build