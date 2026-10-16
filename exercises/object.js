const student = {
    name: "Htun",
    university: "UCS(Mdy)",
    learning: "Javascript",
    projects: 3
}

console.log(student.name)
console.log(student.university)
console.log(student.learning)
console.log(student.projects)

const project = {
    name : "Task Manager",
    language : "Javascript",
    complete : false,
    toDelete : true
}

console.log(project.name)
project.complete = true
project.difficulty = "Beginner"
delete project.toDelete

console.log(project)

const projects = [
    {
        name: "Portfolio",
        language: "HTML and CSS",
        completed: true
    },
    {
        name: "Task Manager",
        language: "JavaScript",
        completed: false
    },
    {
        name: "Student Management System",
        language: "Java and Spring Boot",
        completed: false
    }
];

console.log(projects[1].name);
projects[0].completed = false;
projects.push({
    name: "Weather App",
    language: "JavaScript",
    completed: false
});

console.log(projects.length)