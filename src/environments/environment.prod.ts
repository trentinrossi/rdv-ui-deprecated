export const environment = {
  production: true,

  apiUrl: 'http://rossi:8080',

  tokenWhitelistedDomains: [new RegExp('localhost.senior.com.br:4200')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
