
function calculateDistance() {
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, callback);
}

function callback(response, status) {
    if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
        for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            for (var j = 0; j < results.length; j++) {
                var element = results[j];
                var distance = element.distance.text;
                var duration = element.duration.text;
                var from = origins[i];
                var to = destinations[j];
                alert("From: " + from + " To: " + to + " Distance: " + distance + " Duration: " + duration);
            }
        }
    }
}
