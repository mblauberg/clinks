# Contributing to Clinks

Thank you for your interest in contributing to Clinks! This document provides guidelines for contributing to this project.

## Development Setup

1. **Prerequisites**
   - Node.js 16+ and npm/yarn
   - Expo CLI (`npm install -g expo-cli`)
   - iOS Simulator (Xcode) or Android Emulator

2. **Setup**
   ```bash
   git clone https://github.com/mblauberg/clinks.git
   cd clinks
   npm install
   cp .env.example .env
   # Fill in your API keys in .env
   npm start
   ```

## Project Structure

- `/src/components/` - Reusable UI components
- `/src/screens/` - Application screens
- `/src/services/` - External service integrations (Firebase, Google Places)
- `/src/hooks/` - Custom React hooks
- `/src/utils/` - Utility functions

## Development Guidelines

### Code Style
- Use functional components with React hooks
- Follow existing naming conventions
- Add JSDoc comments for new components/functions
- Ensure proper error handling and loading states

### API Integration
- All API keys must use environment variables
- Never commit `.env` files or hardcoded credentials
- Include proper error handling for all API calls

### Testing
- Test new features on both iOS and Android simulators
- Ensure proper memory cleanup in useEffect hooks
- Verify location permissions work correctly

## Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Make your changes
4. Test thoroughly on both iOS and Android
5. Commit with descriptive messages
6. Push to your fork and submit a pull request

## Issues

Before creating an issue, please:
- Check if the issue already exists
- Provide detailed reproduction steps
- Include device/simulator information
- Add relevant logs or screenshots

## Questions?

Feel free to open an issue for questions or discussion about the project.