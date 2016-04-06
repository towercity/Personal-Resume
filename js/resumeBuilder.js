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
