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
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Hello, friend!",
	"skills" : [
		"writing", "programming", "teaching", "JS"
	]
};

//work object
var work = {
	"jobs" : [
		{
		"employer" : "Franciscan Ministries of Our Lady Health System",
		"title" : "AP Clerk",
		"location" : "Baton Rouge, LA",
		"dates" : "December 2014 - Present",
		"description" : "Processed invoices"
		},
		{
		"employer" : "LSU Cox Center for Student Athletes",
		"title" : "Content Tutor",
		"location" : "Baton Rouge, LA",
		"dates" : "July - December 2014",
		"description" : "Taught English, writing"
		},
		{
		"employer" : "WFSU-FM",
		"title" : "Production Assisstant",
		"location" : "Tallahassee, FL",
		"dates" : "January - July 2014",
		"description" : "Ran automation software, maintained databases"
		},
		{
		"employer" : "WVFS Tallahassee",
		"title" : "Disc Jockey",
		"location" : "Tallahassee, FL",
		"dates" : "January 2012 - December 2013",
		"description" : "Reviewed incoming music, maintained music catalog, ran all on-air audio"
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
		"dates" : 2013,
		"years" : 4
		}
	],
	"onlineCourses" : [
		{
		"title"  : "Front-End Developer",
		"school" : "Udacity",
		"dates" : 2016,
		"url" : "https://www.udacity.com/"
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
		"images" : ["images/project01.png", "images/project02.png"]
	}
	]
};

//Functions

//prints bio to the page
bio.display = function() {
	$("#header").prepend(
		HTMLheaderName.replace("%data%", bio.name) + 
		HTMLheaderRole.replace("%data%", bio.role)
	);
	$("#header").append(
		HTMLmobile.replace("%data%", bio.contacts.mobile) + 
		HTMLemail.replace("%data%", bio.contacts.email) +
		HTMLgithub.replace("%data%", bio.contacts.github) + 
		HTMLtwitter.replace("%data%", bio.contacts.twitter) + 
		HTMLlocation.replace("%data%", bio.contacts.location) + 
		HTMLbioPic.replace("%data%", bio.bioPic) +
		HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
	);
	//checks for skills before printing skills header
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	}
	for (skill in bio.skills) {
		$("#header").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
};

//Prints Work Exp to the page
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(
			HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
			HTMLworkTitle.replace("%data%", work.jobs[job].title) +
			HTMLworkLocation.replace("%data%", work.jobs[job].location) +
			HTMLworkDates.replace("%data%", work.jobs[job].dates) +
			HTMLworkDescription.replace("%data%", work.jobs[job].description)
		);
	}
};

//prints education to the page
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(
			HTMLschoolName.replace("%data%", education.schools[school].name) + 
			HTMLschoolDegree.replace("%data%", education.schools[school].degree) + 
			HTMLschoolDates.replace("%data%", education.schools[school].dates) + 
			HTMLschoolLocation.replace("%data%", education.schools[school].location) + 
			HTMLschoolMajor.replace("%data%", education.schools[school].major)
		);
	}
	if (education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(
				HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + 
				HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school) + 
				HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates) + 
				HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
			);
		}
	}
};

//Prints Projects to the Page
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(
			HTMLprojectTitle.replace("%data%", projects.projects[project].title) +
			HTMLprojectDates.replace("%data%", projects.projects[project].dates) +
			HTMLprojectDescription.replace("%data%", projects.projects[project].description)
		);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
			}
		}
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