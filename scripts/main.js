;
(function ($) {
	'use strict';

	$('a[href*="#"').on('click', function () {

		console.log('test');
		event.preventDefault();

		$('body').animate({
			scrollTop: $($(this).attr('href')).offset().top,
		}, 600)


	});

	// slick slider
	$(window).on('load', function () {
		$('.ba-team__slider').slick({

			dots: true,
			slide: ".ba-team__slide",
			arrows: false,
			//		dotsClass

		});
		});
	
		$(window).on('load', function () {
		$('.ba-testimonials__slider').slick({

			dots: true,
			slide: ".ba-testimonials__slide",
			arrows: false,
			//		dotsClass

		});
		});
	// end of slick slider


	
})(jQuery);

;(function($){
	'use strict';	
	// var baOffice = {lat: 49.568559, lng: 34.585486};
	// var map = new google.maps.Map(document.querySelector('.ba-map'), {
	// 	zoom: 16,
	// 	center: baOffice,
	// 	// disableDefaultUI: true,
	// 	scrollwheel: false,
	// 	styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],

	// });

	// var baOfficeMarker = new google.maps.Marker({
	// 	position: baOffice,
 //        map: map,
 //        icon: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Marker-Outside-Pink-icon.png'
	// })

	// var silpoMarker = new google.maps.Marker({
	// 	position: {lat: 49.571085, lng: 34.585778},
 //        map: map,
 //        icon: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Marker-Outside-Pink-icon.png',
	// })

	// var bounds = new google.maps.LatLngBounds();
	// var latLng1 = new google.maps.LatLng(silpoMarker.position.lat(), silpoMarker.position.lng());
	// var latLng2 = new google.maps.LatLng(baOfficeMarker.position.lat(), baOfficeMarker.position.lng());

	// bounds.extend(latLng1);
	// bounds.extend(latLng2);

	// map.fitBounds(bounds);

	function createMap() {
		var $markers = $('.ba-marker');
		var map = new google.maps.Map($('.ba-map')[0], {
			zoom: 12,
			center: new google.maps.LatLng(0,0)
		});
		addMarkers($markers, map);
		centerMap($markers, map);
	}
	
	function addMarkers($markers, map) {
		$markers.each(function() {
			var lat = $(this).data('lat');
			var lng = $(this).data('lng');
			var marker = new google.maps.Marker({
				position: {lat: lat, lng: lng},
				map: map,
				icon: '../images/marc.png'
			});

			var content = $(this).find('.description').html();

			var infoWindow = new google.maps.InfoWindow({
				content: content
			});
			marker.addListener('click', function() {
				infoWindow.open(map, marker);
			});
			
		});
	}

	function centerMap($markers, map) {
		if ($markers.length == 1) {
			var lat = $($markers).data('lat');
			var lng = $($markers).data('lng');
			var latLng = new google.maps.LatLng(lat, lng);
			map.setCenter(latLng);
		} else {
			var bounds = new google.maps.LatLngBounds();
			$markers.each(function() {
				var lat = $(this).data('lat');
				var lng = $(this).data('lng');
				var latLng = new google.maps.LatLng(lat, lng);
				bounds.extend(latLng);
			});
			map.fitBounds(bounds);
		}
	}

	createMap();
	 

})(jQuery);


