module.exports = {
  integrations: [
    {
      name: 'GoogleAnalytics',
      config: {
        id: process.env.GOOGLE_ANALYTICS_ID,
        remarketing: false,
        ecommerce: false,
        enhancedEcommerce: false,
        set: {
          anonymizeIp: false
        }
      }
    },
  ]
};
