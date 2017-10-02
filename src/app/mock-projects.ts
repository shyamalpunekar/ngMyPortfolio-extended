import { Project } from './project.model';

export const PROJECTS: Project[] = [
 new Project("Team Tracker", "Java, Spark, PostGres, Restful webservices", "This is a program that allows a Startup Weekend organizer or hack-a-thon coordinator to track teams and their members. Management software with dashboard for a hypothetical Teams to allow to CREATE, ADD, UPDATE, DELETE members.", 1),
 new Project("Galactic Age Calculator", "HTML/CSS, JavaScript/TypeScript, ES6, Jasmine/Karma", "An application that determines a user’s age based on a planet’s solar years.", 2),
 new Project("Doctor LookUp", "HTML/CSS, JavaScript/TypeScript, AngularJS", "An application where users may enter a medical issue into a form, submit it, and receive a list of doctors in your city (e.g. Portland).", 3),
 new Project("My Portfolio", "HTML/CSS, JavaScript/TypeScript, AngularJs2, Firebase", "An application gives an information about my educational background, skills, technologies, current education, future Goals.", 4),
 new Project("Party Planning", "HTML/CSS, Java, jUnit", "This is a command line application for an all-inclusive party planning service. This will prompt the user with several questions about a party they're throwing. Based on information they provide, create a unique Event object. Then, evaluate its properties to calculate an estimated cost for party planning services.", 5),
 new Project("Epicodus Student API", "HTML/CSS, Java, jUnit, Postman, Gradle, PostGres", "This is a program that allows a to track epicodus and their students average age, gender breakdown, most popular track, zipcode, last job held before enrolling. Management software with dashboard for a hypothetical epicodus by following CRUD functionality.", 6)
];
