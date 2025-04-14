import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // In a real implementation, this would redirect to Google OAuth
  // For our mock implementation, we'll redirect to dashboard

  // Get URL to redirect to after sign-in (or default to home)
  const callbackUrl = req.nextUrl.searchParams.get('callbackUrl') || '/';
  
  // Redirect directly to dashboard (simulating successful auth)
  return new Response(null, {
    status: 302,
    headers: {
      'Location': callbackUrl
    }
  });
} 