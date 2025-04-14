# Google Business Profile API Setup Guide

This guide will help you set up Google Business Profile API integration with your Google Profile Dashboard application.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Name your project (e.g., "Business Profile Manager") and click "Create"

## Step 2: Enable the Business Profile API

1. In your project, navigate to "APIs & Services" > "Library"
2. Search for "Business Profile API" (formerly Google My Business API)
3. Click on it and press "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type (unless you have Google Workspace)
3. Fill in the required information:
   - App name: "Google Profile Dashboard"
   - User support email: Your email
   - Developer contact information: Your email
4. Click "Save and Continue"
5. Add scopes:
   - Click "Add or Remove Scopes"
   - Add the following scopes:
     - `https://www.googleapis.com/auth/business.manage`
     - `openid`
     - `profile`
     - `email`
6. Click "Save and Continue"
7. Add test users (your Google account email)
8. Click "Save and Continue"

## Step 4: Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Name your client (e.g., "Google Profile Dashboard Web Client")
5. Add authorized redirect URIs:
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`
6. Click "Create"
7. Note your Client ID and Client Secret

## Step 5: Configure Your Environment Variables

1. Update the `.env.local` file in your project with the credentials:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=generate-a-secure-random-string
   
   # Google OAuth credentials
   GOOGLE_CLIENT_ID=your-client-id-here
   GOOGLE_CLIENT_SECRET=your-client-secret-here
   ```

## Step 6: Run the Application

1. Run the application using the provided batch file:
   ```
   run-with-auth.bat
   ```
2. Visit http://localhost:3000 in your browser
3. Click "Sign in with Google"
4. Follow the prompts to authenticate with your Google account
5. Grant the requested permissions
6. You will be redirected to the dashboard where you can view and manage your business profiles

## Understanding Business Profile API Endpoints

The application uses the following Google Business Profile API endpoints:

- **List Profiles**: `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/~/locations`
- **Get Profile Details**: `https://mybusinessbusinessinformation.googleapis.com/v1/{name}`
- **Update Profile**: `https://mybusinessbusinessinformation.googleapis.com/v1/{name}` (PATCH method)

## Troubleshooting

### Common Issues:

1. **"Error 403: Access Denied"**
   - Ensure your Google account has access to the Google Business Profile(s) you're trying to manage
   - Verify you've enabled the correct API in your Google Cloud Console
   - Check that your OAuth consent screen has the correct scopes

2. **"Error 401: Unauthorized"**
   - Check that your Client ID and Client Secret are correctly set in `.env.local`
   - Ensure your redirect URI exactly matches what's configured in Google Cloud Console

3. **"No business profiles found"**
   - Verify your Google account has access to at least one Google Business Profile
   - Check the browser console for detailed API error messages

For more information, refer to the [Google Business Profile API documentation](https://developers.google.com/my-business/reference/rest). 