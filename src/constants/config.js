const devMode = (process.env.NODE_ENV !== 'development');

export default {
  // App Details
  appName: 'Meetup',

  // Build Configuration - eg. Debug or Release?
  DEV: devMode,
};
