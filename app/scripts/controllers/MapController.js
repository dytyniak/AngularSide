'use strict';

var MapController = function ($scope, NgMap, RouteService) {
    
    var map;
    var directionsDisplay;
    var directionsService;
    
    NgMap.getMap().then(function(evtMap) {
        map = evtMap;
    });
    
    $scope.showRoute = function() {
        if(directionsDisplay){
            directionsDisplay.set('directions', null);
        }
        
        var request;
        RouteService.getByName($scope.busName).then(function(data) {
            var route = data[0];
            console.log(route);
            request = {
                origin: route.originalLatitude + ', ' + route.originalLongitude,
                destination: route.destinationLatitude + ', ' + route.destinationLongitude,
                travelMode: google.maps.TravelMode.TRANSIT
            }
            
            directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                suppressInfoWindows: true,
            });
            directionsDisplay.setMap(map);
            directionsService = new google.maps.DirectionsService();

            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);            
                }
            });
        });

        /*var start = "49.785498, 24.058822";
        var end = "49.836903, 24.005782";

        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.TRANSIT
        }

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);            
            }
        });*/
    }
}

module.exports = MapController;

/*
waypoints: [{
                location: "49.774747, 24.014425",
                stopover: true
            },{
                location: "49.777930, 24.014308",
                stopover: true
            },{
                location: "49.784144, 24.014437",
                stopover: true
            },{
                location: "49.787324, 24.017044",
                stopover: true
            },{
                location: "49.787325, 24.017051",
                stopover: true
            },{
                location: "49.794645, 24.016648",
                stopover: true
            },{
                location: "49.797986, 24.017346",
                stopover: true
            },{
                location: "49.802595, 24.018379",
                stopover: true
            },{
                location: "49.808466, 24.019407",
                stopover: true
            },{
                location: "49.815123, 24.020074",
                stopover: true
            },{
                location: "49.820255, 24.020446",
                stopover: true
            },{
                location: "49.825159, 24.022994",
                stopover: true
            },{
                location: "49.829440, 24.032269",
                stopover: true
            },{
                location: "49.833834, 24.035490",
                stopover: true
            },{
                location: "49.837391, 24.035096",
                stopover: true
            },{
                location: "49.842429, 24.035213",
                stopover: true
            },{
                location: "49.844826, 24.027820",
                stopover: true
            },{
                location: "49.845501, 24.026065",
                stopover: true
            }]
*/

/*
     $scope.stops = [ 
             "49.774040, 24.012461",
             "49.774747, 24.014425",
             "49.777930, 24.014308",
             "49.784144, 24.014437",
             "49.787324, 24.017044",
             "49.787325, 24.017051",
             "49.794645, 24.016648",
             "49.797986, 24.017346",
             "49.802595, 24.018379",
             "49.808466, 24.019407",
             "49.815123, 24.020074",
             "49.820255, 24.020446",
             "49.825159, 24.022994",
             "49.829440, 24.032269",
             "49.833834, 24.035490",
             "49.837391, 24.035096",
             "49.842429, 24.035213",
             "49.844826, 24.027820",
             "49.845501, 24.026065",
             "49.845498, 24.026071"
            ];*/