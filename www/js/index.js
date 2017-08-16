
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
    path = imageURI
debugger;
    // Tesseract.recognise(path,tesseractSuccessCallback,tesseractErrorCallback);

    Tesseract.recognize(path)
    .then(function(result){
       // console.log(result);
    document.getElementById("textarea1").value = result.text; // assign results to a textbox
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
    alert(error);
}

app.initialize();