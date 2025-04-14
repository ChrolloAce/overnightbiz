@echo off
echo Starting Google Profile Dashboard with authentication...

echo Please make sure you have set up your Google Cloud OAuth credentials
echo and added them to the .env.local file before running this script.

echo Checking if .env.local exists...
if not exist ".env.local" (
  echo .env.local file not found!
  echo Creating template .env.local file...
  (
    echo NEXTAUTH_URL=http://localhost:3000
    echo NEXTAUTH_SECRET=your-secret-key-here
    echo.
    echo # Google OAuth credentials
    echo GOOGLE_CLIENT_ID=your-client-id-here
    echo GOOGLE_CLIENT_SECRET=your-client-secret-here
  ) > .env.local
  echo Please edit .env.local with your Google OAuth credentials
  echo Then run this script again
  pause
  exit
)

echo Starting the development server...
npm run dev 