var view = {
    //resume info Objects
    //bio object
    bio: {
    	"name" : "Matthew Nerger",
    	"role" : "Front-End Developer",
    	"contacts" : {
    		"mobile" : "813.758.8512",
    		"email" : "mnerger@lsu.edu",
    		"github" : "towercity",
    		"twitter" : "towercitydrive",
    		"location" : "Baton Rouge, LA"
    	},
    	"bioPic" : "images/me.jpg",
    	"welcomeMessage" : "I'm a beginning front-end web designer with strong experience in writing," + " " +
    						"audio, and education.",
    	"skills" : [
    		"Writing", "Web Design", "Teaching", "Javascript", "CSS", "HTML", "Adobe Audition"
    	]
    },

    //work object
    work: {
    	"jobs" : [
    		{
    		"employer" : "DIG Baton Rouge",
    		"title" : "Reporter",
    		"location" : "Baton Rouge, LA",
    		"dates" : "August 2015 - Present",
    		"description" : [
    			"Researched and wrote articles about community events",
    			"Pitched stories for publication",
    			"Worked independently on stories from inception to deadline"]
    		},
    		{
    		"employer" : "Franciscan Ministries of Our Lady Health System",
    		"title" : "AP Clerk",
    		"location" : "Baton Rouge, LA",
    		"dates" : "December 2014 - Present",
    		"description" : [
    			"Processed invoices"]
    		},
    		{
    		"employer" : "LSU Cox Center for Student Athletes",
    		"title" : "Content Tutor",
    		"location" : "Baton Rouge, LA",
    		"dates" : "July - December 2014",
    		"description" : [
    			"Tutored student-athletes in composition and literature",
    			"Generated and presented educational materials",
    			"Helped students set and meet structured learning goals"]
    		},
    		{
    		"employer" : "WFSU-FM",
    		"title" : "Production Assisstant",
    		"location" : "Tallahassee, FL",
    		"dates" : "January - July 2014",
    		"description" : ["Ran automation software, maintained databases"]
    		},
    		{
    		"employer" : "Solution Skills, Inc.",
    		"title" : "Marketing Assisstant",
    		"location" : "Tallahassee, FL",
    		"dates" : "January - July 2014",
    		"description" : ["Wrote, edited, and formatted marketing materials, strategy guides, and practice tests",
    			"Researched and compiled information on standardized tests",
    			"Organized and led focus groups and workshops with high-school and college aged students"]
    		},
    		{
    		"employer" : "Leon County Schools",
    		"title" : "Substitute Teacher",
    		"location" : "Tallahassee, FL",
    		"dates" : "January - July 2014",
    		"description" : ["Taught large groups of students a variety of subjects",
    			"Worked individually with students as needed",
    			"Reported progress and specific student needs to primary teacher"]
    		},
    		{
    		"employer" : "WVFS Tallahassee",
    		"title" : "Disc Jockey",
    		"location" : "Tallahassee, FL",
    		"dates" : "January 2012 - December 2013",
    		"description" : [
    			"Wrote reviews for albums entered into catalog",
    			"Researched, wrote, and read summaries of articles on air",
    			"Wrote and produced station identifications"]
    		}
    	]
    },

    //education object
    education: {
    	"schools" : [
    		{
    		"name" : "Florida State University",
    		"location" : "Tallahassee, FL",
    		"major" : "Creative Writing",
    		"degree" : "Bachelor of Arts",
    		"dates" : "August 2009 - May 2013",
    		"years" : 4,
    		"description" : [
    			"Produced sixty pages of original fiction for honors thesis",
    			"Attended four limited access writing workshops, each of which required approval for enrollment based on writing samples"]
    		}
    	],
    	"onlineCourses" : [
    		{
    		"title"  : "Front-End Developer",
    		"school" : "Udacity",
    		"dates" : 2016,
    		"url" : "https://www.udacity.com/",
    		"description" : [
    			"Learned fundamentals of HTML, CSS, and Javascript",
    			"Created a variety of original projects using fundamentals of web design"]
    		}
    	]
    },

    //project object
    projects: {
    	"projects" : [
    	{
    		"title" : "Work Portfolio",
    		"dates" : 2016,
    		"description" : "Portfolio of audio experience",
    		"image" : "images/project01.jpg",
    		"link" : "#"
    	},
    	{
    		"title" : "Dummy Project 1",
    		"dates" : 2016,
    		"description" : "Stand in for later Udacity Projects",
    		"image" : "http://lorempixel.com/250/360/cats",
    		"link" : "#"
    	},
    	{
    		"title" : "Dummy Project 2",
    		"dates" : 2016,
    		"description" : "Stand in for later Udacity Projects",
    		"image" : "http://lorempixel.com/250/360/city",
    		"link" : "#"
    	}
    	]
    },

    //reusable text variablesHTMLclear: '<div class="clear"></div>',
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

    //Prints all resume info onto page (separate from init in case of future changes which require re-rendering)
    render: function() {
        //bio render
        $("#topContacts").append(
    		this.HTMLmobile.replace("%data%", this.bio.contacts.mobile) +
    		this.HTMLemail.replace("%data%", this.bio.contacts.email) +
    		this.HTMLgithub.replace("%data%", this.bio.contacts.github) +
    		this.HTMLtwitter.replace("%data%", this.bio.contacts.twitter) +
    		this.HTMLlocation.replace("%data%", this.bio.contacts.location)
    		);
    	$("#footerContacts").append(
    		this.HTMLmobile.replace("%data%", this.bio.contacts.mobile) +
    		this.HTMLemail.replace("%data%", this.bio.contacts.email) +
    		this.HTMLgithub.replace("%data%", this.bio.contacts.github) +
    		this.HTMLtwitter.replace("%data%", this.bio.contacts.twitter) +
    		this.HTMLlocation.replace("%data%", this.bio.contacts.location)
    		);
    	$(this.HTMLheaderBox).insertBefore("#main");
    	$("#header-box").append(this.HTMLheaderText);
    	$("#header-text").append(
    		this.HTMLheaderName.replace("%data%", this.bio.name) +
    		this.HTMLheaderRole.replace("%data%", this.bio.role)
    		);
    	$("#header").append(this.HTMLwelcomeMsg.replace("%data%", this.bio.welcomeMessage));
    	//checks for skills before printing skills header
    	if (this.bio.skills.length > 0) {
    		$("#bottomRow").append(this.HTMLskillsStart);
    		for (var skill in this.bio.skills) {
    			$("#skillsList").append(this.HTMLskills.replace("%data%", this.bio.skills[skill]));
    		}
    	}

        //work render
        this.work.jobs.forEach (function(job) {
    		$("#workExperience").append(view.HTMLworkStart);
    		$(".work-entry:last").append(view.HTMLworkLeft);
    		$(".work-left:last").append(
    			view.HTMLworkEmployer.replace("%data%", job.employer) +
    			view.HTMLworkDates.replace("%data%", job.dates) +
    			view.HTMLworkLocation.replace("%data%", job.location)
    		);
    		$(".work-entry:last").append(view.HTMLworkRight);
    		$(".work-right:last").append(view.HTMLworkTitle.replace("%data%", job.title));
            job.description.forEach (function(duty) {
                $(".work-right:last").append(view.HTMLworkDescription.replace("%data%", duty));
            });
    		$("#workExperience").append(view.HTMLclear);
    	});

        //education render
        this.education.schools.forEach(function(school) {
            $("#education").append(view.HTMLschoolStart);
    		$(".education-entry:last").append(view.HTMLschoolLeft);
    		$(".education-left:last").append(
    			view.HTMLschoolName.replace("%data%", school.name) +
    			view.HTMLschoolDates.replace("%data%", school.dates) +
    			view.HTMLschoolLocation.replace("%data%", school.location)
    		);
    		$(".education-entry:last").append(view.HTMLschoolRight);
    		$(".education-right:last").append(
    			view.HTMLschoolDegree.replace("%data%", school.degree) +
    			view.HTMLschoolMajor.replace("%data%", school.major)
    		);
            school.description.forEach(function(duty) {
                $(".education-right:last").append(view.HTMLschoolDescription.replace("%data%", duty));
            });
    		$("#education").append(view.HTMLclear);
        });
    	if (this.education.onlineCourses) {
            this.education.onlineCourses.forEach(function(course) {
                $("#education").append(view.HTMLonlineClasses);
    			$("#education").append(view.HTMLschoolStart);
    			$(".education-entry:last").append(view.HTMLschoolLeft);
    			$(".education-left:last").append(
    				view.HTMLonlineSchool.replace("%data%", course.school) +
    				view.HTMLonlineDates.replace("%data%", course.dates) +
    				view.HTMLonlineURL.replace("%data%", course.url)
    			);
    			$(".education-entry:last").append(view.HTMLschoolRight);
    			$(".education-right:last").append(
    				view.HTMLonlineTitle.replace("%data%", course.title)
    			);
                course.description.forEach(function(duty) {
                    $(".education-right:last").append(view.HTMLschoolDescription.replace("%data%", duty));
                });
    			$("#education").append(view.HTMLclear);
            });

            //projects render
            this.projects.projects.forEach(function(project){
                $("#projects").append(view.HTMLprojectStart);
        		$(".project-entry:last").append(view.HTMLprojectImage.replace("%data%", project.image));
        		$(".project-entry:last").append(view.HTMLprojectOverlay);
        		$(".project-overlay:last").append(
        			view.HTMLprojectTitle.replace("%data%", project.title) +
        			view.HTMLprojectDates.replace("%data%", project.dates) +
        			view.HTMLprojectDescription.replace("%data%", project.description) +
        			view.HTMLprojectLink.replace("%data%", project.link)
        		);
            });
    	}
    },
    init: function() {
        this.render();
    }
};

var octopus = {
    init: function() {
        view.init();
        model.init();
        $("#mapDiv").append(map);
    }
}

var model = {
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
