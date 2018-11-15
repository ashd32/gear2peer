
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}
function initMap() {

	var midtown = {
		info: '<strong>REI Co-op Traverse 35 Pack</strong><br>\
					<br> Atlanta, GA 60640<br>\
					<a href="https://www.google.com/maps/place/Midtown,+Atlanta,+GA/@33.7868358,-84.3970265,14z/data=!3m1!4b1!4m5!3m4!1s0x88f504420bd78c53:0x878c894c30b9bbe2!8m2!3d33.783315!4d-84.3831166">Get Directions</a>',
		lat: 33.7868358,
		long: -84.3970265
	};

	var innman = {
		info: '<strong>Osprey Aether AG 70 Pack</strong><br>\
						956 Waverly Way NE, Atlanta, GA 30307<br>\
					<a href="https://www.google.com/maps/dir/Inman+Park,+Atlanta,+GA+30307/33.76102,-84.3564575/@33.7597881,-84.3567464,18z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x88f5040120475369:0x9c7450ab8981220!2m2!1d-84.3555194!2d33.7583923!1m0!3e0">Get Directions</a>',
		lat: 33.76102,
		long: -84.3564575
	};

	var edgewood = {
		info: '<strong>Traveller Sleeping Bag</strong><br>\r\
					1275 Caroline St NE, Atlanta, GA 30307<br>\
					<a href="https://www.google.com/maps/place/Target/@33.7568493,-84.416169,12z/data=!3m1!5s0x88f506ace9b76705:0x6a010471e800aa20!4m21!1m15!4m14!1m6!1m2!1s0x88f506acd52bfbb1:0x6de6a069aa6e40f0!2sTarget,+1275+Caroline+St+NE,+Atlanta,+GA+30307!2m2!1d-84.3461284!2d33.7567264!1m5!1m1!1s0x88f506acd52bfbb1:0x6de6a069aa6e40f0!2m2!1d-84.3461284!2d33.7567264!3e0!3m4!1s0x88f506acd52bfbb1:0x6de6a069aa6e40f0!8m2!3d33.7567264!4d-84.3461284">Get Directions</a>',
		lat: 33.7568493,
		long: -84.416169
	};
	var sandySprings = {
		info: '<strong>Helium Bivy</strong><br>\r\
					609 Mabry Rd, Sandy Springs, GA 30328<br>\
					<a href="https://www.google.com/maps/place/501-609+Mabry+Rd,+Sandy+Springs,+GA+30328/@33.9475942,-84.3687326,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x88f50c1dc0a2c231:0xa9e9faf26702de1d!2sSandy+Springs,+GA!3b1!8m2!3d33.9304352!4d-84.3733147!3m4!1s0x88f50c106efd5377:0xf206feb6d780dbca!8m2!3d33.9475898!4d-84.3665439">Get Directions</a>',
		lat: 33.9475942,
		long: -84.3687326
	};

	var locations = [
		[midtown.info, midtown.lat, midtown.long, 0],
		[innman.info, innman.lat, innman.long, 1],
		[edgewood.info, edgewood.lat, edgewood.long, 2],
		[sandySprings.info, sandySprings.lat, sandySprings.long, 3],
	];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: new google.maps.LatLng(33.7679192, -84.5606907),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}