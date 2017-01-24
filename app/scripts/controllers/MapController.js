'use strict';

var MapController = function ($scope, NgMap, RouteService) {
    
    resetDirections();
    var map;
    var directionsDisplay;
    var directionsService;
    
    
    NgMap.getMap().then(function(evtMap) {
        map = evtMap;
    });
    
    RouteService.getByDirector({
        username: 'root'
    }).then(function(data){
        $scope.routes = data;
    });
    
    $scope.showRoute = function(route) {
        resetDirections();
        
        var request = {
            origin: route.originalLatitude + ', ' + route.originalLongitude,
            destination: route.destinationLatitude + ', ' + route.destinationLongitude,
            travelMode: google.maps.TravelMode.TRANSIT
        };

        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            suppressInfoWindows: true
        });
        directionsDisplay.setMap(map);
        directionsService = new google.maps.DirectionsService();

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);            
            }
        });
    }
    
    function resetDirections() {
        if(directionsDisplay){
            directionsDisplay.set('directions', null);
        }
    }
}

module.exports = MapController;