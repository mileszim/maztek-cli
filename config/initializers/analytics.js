module.exports = function() {
  return {
    integrations: [
      {
        name: 'GoogleAnalytics',
        config: {
          id: 'UA-120955643-1',
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
};
