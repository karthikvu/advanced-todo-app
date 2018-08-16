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
        status: 0
    }
]
}

const tasks = (state = initialTasks, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
            break;

        case "LOGOUT":
            return {
                ...state,
                user: null
            }
            break;

        default:
            return {
                ...state,
                user: null
            }
            break;
    }
}

module.exports = tasks;