const projects = [
    { name: "Portfolio", completed: true },
    { name: "Task Manager", completed: false },
    { name: "Weather App", completed: false }
];

for(const project of projects){
    console.log(`${project.name} - Completed: ${project.completed}`)
}