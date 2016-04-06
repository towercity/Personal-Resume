
var model = {
    HTMLclear: '<div class="clear"></div>',

    HTMLheaderBox: '<div id="header-box"></div>',
    HTMLheaderName: '<h1 id="name">%data%</h1>',
    HTMLheaderRole: '<div>%data%</div>',
    HTMLheaderText: '<div id="header-text"></div>',

    HTMLcontactGeneric: '<li class="flex-item"><span class="dark-text">%contact%</span><span class="white-text">%data%</span></li>',
    HTMLmobile: '<li class="flex-item"><span class="dark-text">mobile</span><span class="white-text">%data%</span></li>',
    HTMLemail: '<li class="flex-item"><span class="dark-text">email</span><span class="white-text">%data%</span></li>',
    HTMLtwitter: '<li class="flex-item"><span class="dark-text">twitter</span><span class="white-text">%data%</span></li>',
    HTMLgithub: '<li class="flex-item"><span class="dark-text">github</span><span class="white-text">%data%</span></li>',
    HTMLblog: '<li class="flex-item"><span class="dark-text">blog</span><span class="white-text">%data%</span></li>',
    HTMLlocation: '<li class="flex-item"><span class="dark-text">location</span><span class="white-text">%data%</span></li>',

    HTMLwelcomeMsg: '<h2 class="center-text">Welcome!</h2><p id="welcome-message" class="row">%data%</p>',

    HTMLskillsStart: '<div id="skills" class="col-md-3"><h2 id="skills-h3" class="left-text">Skills:</h2><ul id="skillsList"></ul>',
    HTMLskills: '<li><span>%data%</span></li>',

    HTMLworkStart: '<div class="work-entry row"></div>',
    HTMLworkLeft: '<div class="work-left col-md-5"></div>',
    HTMLworkRight: '<div class="work-right col-md-7"></div>',
    HTMLworkEmployer: '<p>%data%</p>',
    HTMLworkTitle: '<p>%data%</p>',
    HTMLworkDates: '<div class="date-text">%data%</div>',
    HTMLworkLocation: '<div class="location-text">%data%</div>',
    HTMLworkDescription: '<li>%data%</li>',

    HTMLprojectStart: '<div class="col-md-4 project-container"><div class="project-entry image-wrapper overlay-fade-in"></div></div>',
    HTMLprojectOverlay: '<div class="project-overlay image-overlay-content"></div>',
    HTMLprojectTitle: '<h2>%data%</h2>',
    HTMLprojectDates: '<div class="white-text">%data%</div>',
    HTMLprojectDescription: '<p>%data%</p>',
    HTMLprojectImage: '<img src="%data%">',
    HTMLprojectLink: '<a href="%data%" class="button">View project</a>',

    HTMLschoolStart: '<div class="education-entry row"></div>',
    HTMLschoolLeft: '<div class="education-left col-md-5"></div>',
    HTMLschoolRight: '<div class="education-right col-md-7"></div>',
    HTMLschoolName: '<p>%data%</p>',
    HTMLschoolDegree: '<p>%data%, ',
    HTMLschoolDates: '<div class="date-text">%data%</div>',
    HTMLschoolLocation: '<div class="location-text">%data%</div>',
    HTMLschoolMajor: '%data%</p>',
    HTMLschoolDescription: '<li>%data%</li>',

    HTMLonlineClasses: '<h3>Online Classes</h3>',
    HTMLonlineTitle: '<p>%data%</p>',
    HTMLonlineSchool: '<p>%data%</p>',
    HTMLonlineDates: '<div class="date-text">%data%</div>',
    HTMLonlineURL: '<a href="#">%data%</a>',

    internationalizeButton: '<button>Internationalize</button>',
    googleMap: '<div id="map"></div>',

    clickLocations: [],

    logClicks: function(x, y) {
        this.clickLocations.push({
            x: x,
            y: y
        });
        console.log('x location: ' + x + '; y location: ' + y);
    },

    init: function() {
        $('button').click(function() {
            var iName = inName() || function(){};
            $('#name').html(iName);
        });

        $(document).click(function(loc) {
            var x = loc.pageX;
            var y = loc.pageY;

            model.logClicks(x, y);
        });
    }
};


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
