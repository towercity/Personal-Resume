//Objects

//bio object
var bio = {
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
};

//work object
var work = {
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
};

//education object
var education = {
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
};

//project object
var projects = {
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
};

//Functions

//prints bio to the page
bio.display = function() {
	$("#topContacts").append(
		HTMLmobile.replace("%data%", bio.contacts.mobile) + 
		HTMLemail.replace("%data%", bio.contacts.email) +
		HTMLgithub.replace("%data%", bio.contacts.github) + 
		HTMLtwitter.replace("%data%", bio.contacts.twitter) + 
		HTMLlocation.replace("%data%", bio.contacts.location)
		);
	$("#footerContacts").append(
		HTMLmobile.replace("%data%", bio.contacts.mobile) + 
		HTMLemail.replace("%data%", bio.contacts.email) +
		HTMLgithub.replace("%data%", bio.contacts.github) + 
		HTMLtwitter.replace("%data%", bio.contacts.twitter) + 
		HTMLlocation.replace("%data%", bio.contacts.location)
		);
	$(HTMLheaderBox).insertBefore("#main");
	$("#header-box").append(HTMLheaderText);
	$("#header-text").append(
		HTMLheaderName.replace("%data%", bio.name) +
		HTMLheaderRole.replace("%data%", bio.role)
		);
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	//checks for skills before printing skills header
	if (bio.skills.length > 0) {
		$("#bottomRow").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			$("#skillsList").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
};

//Prints Work Exp to the page
work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkLeft);
		$(".work-left:last").append(
			HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
			HTMLworkDates.replace("%data%", work.jobs[job].dates) +
			HTMLworkLocation.replace("%data%", work.jobs[job].location)
		);
		$(".work-entry:last").append(HTMLworkRight);
		$(".work-right:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
		for (var duty in work.jobs[job].description) {
			$(".work-right:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description[duty]));			
		}
		$("#workExperience").append(HTMLclear);
	}
};

//prints education to the page
education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolLeft);
		$(".education-left:last").append(
			HTMLschoolName.replace("%data%", education.schools[school].name) + 
			HTMLschoolDates.replace("%data%", education.schools[school].dates) +
			HTMLschoolLocation.replace("%data%", education.schools[school].location)
		);
		$(".education-entry:last").append(HTMLschoolRight);
		$(".education-right:last").append(
			HTMLschoolDegree.replace("%data%", education.schools[school].degree) + 
			HTMLschoolMajor.replace("%data%", education.schools[school].major)
		);
		for (var duty in education.schools[school].description) {
			$(".education-right:last").append(HTMLschoolDescription.replace("%data%", education.schools[school].description[duty]));			
		}
		$("#education").append(HTMLclear);
	}
	if (education.onlineCourses) {
		for (var course in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolLeft);
			$(".education-left:last").append(
				HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school) + 
				HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates) + 
				HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
			);
			$(".education-entry:last").append(HTMLschoolRight);
			$(".education-right:last").append(
				HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
			);
			for (var duty in education.schools[school].description) {
				$(".education-right:last").append(HTMLschoolDescription.replace("%data%", education.onlineCourses[course].description[duty]));			
			}
			$("#education").append(HTMLclear);
		}
	}
};

//Prints Projects to the Page
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image));
		$(".project-entry:last").append(HTMLprojectOverlay);
		$(".project-overlay:last").append(
			HTMLprojectTitle.replace("%data%", projects.projects[project].title) +
			HTMLprojectDates.replace("%data%", projects.projects[project].dates) +
			HTMLprojectDescription.replace("%data%", projects.projects[project].description) + 
			HTMLprojectLink.replace("%data%", projects.projects[project].link)
		);
	}
};


//Page Display

//Function calls
bio.display();
work.display();
education.display();
projects.display();

//Map
$("#mapDiv").append(googleMap);