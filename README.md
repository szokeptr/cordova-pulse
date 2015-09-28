# Cordova Heart Rate Plugin

Plugin to measure heart rate with the device's camera and flashlight in *realtime*.

Currently iOS only

## Using
    
Install the plugin

    $ cordova plugin add https://github.com/szokeptr/cordova-pulse.git
    

In your app use as follows: 

```js
    var success = function(bpm) {
        console('Your pulse is:', bpm);
    }

    var failure = function() {
        alert("Error calling Pulse plugin");
    }

    pulse.measure("World", success, failure);
```

To stop measuring: 
```js
	pulse.stop();
```