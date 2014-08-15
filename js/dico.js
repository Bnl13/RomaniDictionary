/**
 * 
 */
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        reset_values();
        loadjson();
        displayjson();
    },
    receivedEvent: function(id) {
        //console.log('Received Event: ' + id);
    }
};

var json = [];

function loadjson() {
    json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'data.json',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        displayjson();
        return json;
    })();
}

function displayjson() {
	$.each(json, function(i, item) {
		console.log(i);
		console.log(item);
	});
}