/*global cordova, module*/

module.exports = {
    measure: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Pulse", "measure");
    },
    stop: function (successCallback, errorCallback) {
	    cordova.exec(successCallback, errorCallback, "Pulse", "stop");
    }
};
