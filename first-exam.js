function manageFarm(input) {
    const n = parseInt(input.shift());
    const farmers = {};


    for (let i = 0; i < n; i++) {
        const [name, workArea, tasks] = input.shift().split(' ');
        farmers[name] = {
            workArea,
            tasks: tasks.split(',').sort(),
        };
    }


    for (const command of input) {
        if (command === "End") break;

        const [action, name, param1, param2] = command.split(' / ');

        if (action === "Execute") {
            const workArea = param1;
            const task = param2;
            if (farmers[name].workArea === workArea && farmers[name].tasks.includes(task)) {
                console.log(`${name} has executed the task: ${task}!`);
            } else {
                console.log(`${name} cannot execute the task: ${task}.`);
            }
        } else if (action === "Change Area") {
            const newWorkArea = param1;
            farmers[name].workArea = newWorkArea;
            console.log(`${name} has changed their work area to: ${newWorkArea}`);
        } else if (action === "Learn Task") {
            const newTask = param1;
            if (farmers[name].tasks.includes(newTask)) {
                console.log(`${name} already knows how to perform ${newTask}.`);
            } else {
                farmers[name].tasks.push(newTask);
                farmers[name].tasks.sort();
                console.log(`${name} has learned a new task: ${newTask}.`);
            }
        }
    }


    for (const [name, data] of Object.entries(farmers)) {
        console.log(`Farmer: ${name}, Area: ${data.workArea}, Tasks: ${data.tasks.join(', ')}`);
    }
}

// Example Input
const input = [
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
];

// Run the program
manageFarm(input);