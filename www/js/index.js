
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
    navigator.camera.getPicture(cameraSuccessCallback, cameraErrorCallback, { 
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI
    });

debugger;
    
}

function cameraSuccessCallback(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
debugger;
    Tesseract.recognise(imageURI,tesseractSuccessCallback,tesseractErrorCallback);
}

function cameraErrorCallback(message) {
    alert('Failed because: ' + message);
}



function tesseractSuccessCallback(result) {
debugger;    
    console.log(result);
    alert(result);
}
        
function tesseractErrorCallback(error) {
debugger;    
    console.log(error);
    alert(result);
}

app.initialize();