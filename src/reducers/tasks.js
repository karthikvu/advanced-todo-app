const initialTasks = {
   todos: [
    {
        id: "1",
        title: "Get Bread",
        description : "Tomorrow's breakfast is decided as french toast. Hence need to get bread today",
        status: 0
    }, {
        id: "2",
        title: "Finish Breadware Code",
        description : "Complete the breadware Test. Dont forget to include redux into the code !",
        status: 0
    }, {
        id:"5",
        title: "Visit Shivanasamudra",
        description : "Shivanasamudra is beaming high with beauty this monsoons. Don't forget to visit this beauty.",
        status: 0
    }, {
        id:"3248623",
        title: "Something else !",
        description : "Something Else,Something Else Something Else Something Else Something Else Something Else",
        status: 1
    }
]
}

const tasks = (state = initialTasks, action) => {
    switch (action.type) {
        case "ADD": {
            let task = action.payload;
            let tasks = state.todos;
            tasks.unshift(task);
            return {
                ...state,
                todos: tasks
            }
            break;
        }

        case "UPDATE": {
            let task = action.payload;
            let tasks = state.todos;
            for(let i = 0; i < tasks.length; i++ ){
                if(tasks[i]["id"] == task.id){
                    tasks[i] = task;
                    break;
                }
            }
            return {
                ...state,
                todos: tasks
            }
            break;
        }
        case "DELETE":{ 
            let task = action.payload;
            let tasks = state.todos;
            let index;
            for(let i = 0; i < tasks.length; i++ ){
                if(tasks[i]["id"] == task.id){
                    index = i;
                    break;
                }
            }
            tasks.splice(index, 1);
            return {
                ...state,
                todos: tasks
            }
            break;
        }
        default:
            return {
                ...state,
                user: null
            }
            break;
    }
}

module.exports = tasks;