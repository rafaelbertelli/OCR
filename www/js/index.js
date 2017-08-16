
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function lerTexto() {

    navigator.camera.getPicture(cameraSuccessCallback, cameraErrorCallback, options)

debugger;
    
}

function cameraSuccessCallback(imageData) {
   var image = document.getElementById('myImage');
   image.src = "data:image/jpeg;base64," + imageData;
debugger;
   Tesseract.recognise(imageData,successCallback,errorCallback);
}

function successCallback (result) {
debugger;    
    console.log(result);
    alert(result);
}
        
function errorCallback (error) {
debugger;    
    console.log(error);
    alert(result);
}

app.initialize();