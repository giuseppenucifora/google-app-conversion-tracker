
/* global module, require */

var exec = require('cordova/exec');

module.exports = {
  track: function(conversionId, label, value, repeatable, success, fail) {
    exec(success, fail, 'GoogleAppTracking', 'track', [conversionId, label, value, repeatable]);
  },
  trackApplicationUsage: function(conversionId, success, fail) {
    exec(success, fail, 'GoogleAppTracking', 'enableRemarketing', [conversionId]);
  }
};
