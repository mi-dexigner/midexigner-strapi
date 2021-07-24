module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('mi-dexigner'),
        api_key: env('449583657825885'),
        api_secret: env('dSy_AeyMIKz7GC1F2pPtzYCOLqg'),
      },
    },
    // ...
  });