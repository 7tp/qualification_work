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
      useBuiltIns: "usage", // настройка babel-polyfill, usage: полифилы будут подставлятся для версий браузеров которые указаны выше.
      corejs: "3.1.4",
           "targets": { // цели, для полифилов
              "esmodules": true, // es модули
               "ie": "11",
         }
    },
  ],
];

module.exports = { presets };
