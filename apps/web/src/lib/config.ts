export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001',
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Orion V',
  },
  environment: process.env.NODE_ENV || 'development',
};
