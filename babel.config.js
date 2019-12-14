const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "15",
        firefox: "60",
        chrome: "64",
        safari: "11.1",
        android: "67",
        ios: "10",
      },
      useBuiltIns: "usage",
      corejs: "3.1.4",
           "targets": {
              "esmodules": true,
               "ie": "11",
         }
    },
  ],
];

//module.exports = { presets };
