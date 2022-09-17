const timer = 1000 //milliseconds

const task = () => console.log('This will be ran in the future!')

setTimeout(task,timer);

console.log('Is it ended??');