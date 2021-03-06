'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'questionnaire-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    onlineStatus: {
      version: 'v4',
      pollInterval: 15000,
      timeout: 5000
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    contentSecurityPolicy: {
      'connect-src': [
        process.env.API_HOST,
        process.env.APP_HOST,
        'self'
      ].join(' '),
      'img-src': [
        'data:',
        process.env.APP_HOST,
        process.env.API_HOST,
        'self',
      ].join(' '),
      'default-src': [
        process.env.APP_HOST
      ].join(' '),
      'script-src': [
        process.env.APP_HOST,
        'self',
      ].join(' '),
      'media-src': [
        'self',
        process.env.APP_HOST,
        process.env.API_HOST].join(' '),
      'style-src': [
        'self',
        process.env.APP_HOST,
        '\'unsafe-inline\''
      ].join(' ')
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: process.env.API_HOST,
      API_NAMESPACE: process.env.API_NAMESPACE
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
