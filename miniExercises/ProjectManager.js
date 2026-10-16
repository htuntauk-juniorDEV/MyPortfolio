const projects = [
    { name: "Portfolio", completed: true },
    { name: "Task Manager", completed: false },
    { name: "Weather App", completed: true },
    { name: "Student System", completed: false }
];

let i = 0;
for(const project of projects){
    console.log(project.name);
    if(project.completed){
        i++
    }
}

console.log(`Completed Project: ${i} `);

projects.push({
    name: "Blog App",
    completed: false
});

console.log(projects.length);