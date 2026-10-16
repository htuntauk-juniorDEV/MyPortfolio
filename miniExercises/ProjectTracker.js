const projects = [
    { name: "Portfolio", completed: true },
    { name: "Task Manager", completed: false },
    { name: "Weather App", completed: true }
];

let completeCount = 0;
let inCompleteCount = 0;
for(const project of projects){
    console.log(`${project.name}- Completed: ${project.completed}`)
    if(project.completed){
        completeCount++
    }else{
        inCompleteCount++
    }
}

console.log(`Completed: ${completeCount}`);
console.log(`Incomplete: ${inCompleteCount}`);

projects.push(
    {
        name: "Blog App",
        completed: false
    }
)

console.log(`Total Projects: ${projects.length}`)
