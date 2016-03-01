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
		"city" : "Tallahassee, FL",
		"major" : "Creative Writing",
		"minor" : "Film Studies",
		"graduation" : 2013,
		"years" : 4
		}
	],
	"onineCourses" : [
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
	};
}

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


//formatted variables
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedSkills = [HTMLskills.replace("%data%", bio.skills[0]), HTMLskills.replace("%data%", bio.skills[1]), HTMLskills.replace("%data%", bio.skills[2]), HTMLskills.replace("%data%", bio.skills[3])];
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


//Page Display

//header 
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedTwitter);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
//checks for skills before printing skills header
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
};
$("#header").append(formattedSkills);

//Function calls
work.display();
projects.display();