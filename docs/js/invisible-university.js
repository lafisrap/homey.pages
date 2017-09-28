var locale = "de";

$( () => {
	//////////////////////////////////////////////////////////
	// Firebase

	//////////////////////////////////////////////////////////
	// Login / Logout
  var config = {
    apiKey: "AIzaSyBKdpxWmDe1sNd4A9nDu89Lp840xKcYgUw",
    authDomain: "invisibleuniversity-d8698.firebaseapp.com",
    databaseURL: "https://invisibleuniversity-d8698.firebaseio.com",
    projectId: "invisibleuniversity-d8698",
    storageBucket: "invisibleuniversity-d8698.appspot.com",
    messagingSenderId: "10713201968"
  };
  var fireApp = firebase.initializeApp(config);
  var fireDatabase = fireApp.database();
	var provider = new firebase.auth.GithubAuthProvider();
	var firebaseStatus = {};
	//provider.addScope('user:name');

	$(".navbar-login").click((e) => {

		firebaseStatus.GitHubLogin = firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;

		  $(".navbar-login").fadeOut();
		  $(".navbar-logout").fadeIn();
		  $(".navbar-name").text(user.displayName);

		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;

		  console.log(errorCode, errorMessage);
		});
	});

	$(".navbar-logout").click((e) => {
		firebase.auth().signOut().then(function() {
			$(".navbar-name").text("");
		  $(".navbar-login").fadeIn();
		  $(".navbar-logout").fadeOut();

		}).catch(function(error) {
		  // An error happened.
		});
	});

	firebaseStatus.AnonLogin = firebase.auth().signInAnonymously().catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});

	//////////////////////////////////////////////////////////
	// Writing data
	var firebaseWriteSiteData = function() {
		//if( firebaseSite.url.search("localhost") === -1 ) {
		firebase.database().ref('sites/' + firebaseSite.url).once("value").then((snapshot) => {
			var pageloads = (snapshot.val().pageloads || 0) + 1;
			  firebase.database().ref('sites/' + firebaseSite.url).set({
			    name: firebaseSite.name,
			    description: firebaseSite.description,
			    timeStamp: Date.now(),
			    pageloads: pageloads
			  });
		});
		//}
	}

	firebaseWriteSiteData();



	/*
	/////////////////////////////////////////////////////////
	// Lift topic menu up
	var topicAnimating = null;
	$( ".device-mockup .oneword li" ).hover( function() {
		var topic = $( this ).parents( ".topic" ),
				height = $( ".description", topic ).outerHeight()+10,
				isUp = topic.hasClass( "up");

		topicAnimating = topic.attr( "tid" );

		if( isUp ) {
			$( ".device-mockup .up" ).each( function() {
				if( $(this).attr( "tid") !== topicAnimating ) {
					$(this).stop().animate( {
						"margin-top": "40px",
					}, 300);
				}
			});

			topic.stop().animate( {
				"margin-top": -(height+40)+"px",
			}, 300);

		} else {
			$( ".device-mockup .down" ).each( function() {
				if( $(this).attr( "tid") !== topicAnimating ) {
					$(this).stop().animate( {
						"margin-bottom": "40px",
					}, 300);
				}
			});

			topic.stop().animate( {
				"margin-bottom": "-"+(height+40)+"px",
			}, 300);
		}

	}, null);

	////////////////////////////////////////////////////////7
	// Let topic menu slide back to where it was
	$( ".device-mockup .topic" ).hover( null, function() {
		$( ".device-mockup .up" ).stop().animate( {
			"margin-top": "0px",
		}, 300);

		$( ".device-mockup .down" ).stop().animate( {
			"margin-bottom": "0px",
		}, 300);
	});


	////////////////////////////////////////////////////////7
	// Correct right margins of all topic titles
	var lefts = [];

	$( "#just-for-width .topic" ).each( function() {
		var $this = $( this ),
				elem = $( ".oneword li", $this ),
				width = $( ".oneword li", $this ).outerWidth(),
				attr = $this.attr( "padding" ),
				padding = parseInt( $this.attr( "padding" ) );

		var a = $this.hasClass( "cr" );
		if( $this.hasClass( "cr" )) left = 0;

		lefts.push( left );
		left += width + padding;
	});

	$( "#just-for-width" ).remove();

	$( ".topic" ).each( function() {
		$( this ).css( "left", lefts.shift()+"px" );
	});

	console.assert( !lefts.length, "lefts array should be empty." );
	*/
	////////////////////////////////////////////////////////////////////
	// Read weather data
	moment.locale( locale );

	var updateWeather = function() {
		$( ".infoline .placeOfWriting").each( function( item ) {
			var $this = $( this ),
					place = $this.attr( "place" );

			$.getJSON( "https://maps.googleapis.com/maps/api/geocode/json?address="+place+"&key=AIzaSyDdbOWHGBqca6ryptX-bnW2wNHJicHoi40", res => {
				var loc = res.results[0].geometry.location;

				$.getJSON( "https://api.darksky.net/forecast/73e75222e01692bb6da64c27b34642fa/"+loc.lat+","+loc.lng+"?callback=\?&exclude=daily,flags,hourly&lang="+locale, data => {
					var temp = (data.currently.temperature -32) / 1.8;

					temp = Math.round( temp * 10 ) / 10;

					$this.parent().find( ".weather strong" ).text( temp+"°C, "+data.currently.summary );
					//$this.parent().find( ".date strong" ).text( moment().format("DD. MMM YYYY") );
				});
			});
		});
	};

	updateWeather();
	setInterval( updateWeather, 1800000); // every 30 min

	$( "footer #impressum" ).hide();
	$( "footer .impressum" ).click(() => $( "footer #impressum" ).fadeToggle() );
});
