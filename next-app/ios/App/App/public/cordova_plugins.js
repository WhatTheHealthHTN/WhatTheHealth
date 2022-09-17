
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "com.telerik.plugins.healthkit.HealthKit",
          "file": "plugins/com.telerik.plugins.healthkit/www/HealthKit.js",
          "pluginId": "com.telerik.plugins.healthkit",
        "clobbers": [
          "window.plugins.healthkit"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "com.telerik.plugins.healthkit": "0.7.0"
    };
    // BOTTOM OF METADATA
    });
    