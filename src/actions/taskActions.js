export function addTask(task){
    return {
        type: "ADD",
        payload: {
            ...task,
            id: Date.now()
        }
    }
}

export function updateTask(task){
    return {
        type: "UPDATE",
        payload: task
    }
}

export function deleteTask(task){
    return {
        type: "DELETE",
        payload: task
    }
}