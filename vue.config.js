module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid19-app/'
    : '/',
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Covid19 App',
    themeColor: '#5779ff',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dist/service-worker.js',
    //   // ...other Workbox options...
    // }
  },
};
