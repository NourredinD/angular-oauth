import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // Google OAuth endpoint
  clientId: '619976883052-gqapne5du344dm7g3ch5r08vbqh31p72.apps.googleusercontent.com', // Replace with actual Client ID
  redirectUri: window.location.origin,
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};