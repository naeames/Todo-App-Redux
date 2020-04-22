export const addtask = (payload) =>{
    return{
        type:"ADD_TASK",
        payload
    }
}

export const deletetask = (payload) =>{
    return{
        type:"DELETE_TASK",
        payload
   }
}

export const completetask = (payload) =>{
    return{
        type:"COMPLETE_TASK",
        payload
    }  
}

export const edittask = (payload) =>{
    return{
        type:"EDIT_TASK",
        payload
    }  
}

export const updatetask = (payload) =>{
    return{
        type:"UPDATE_TASK",
        payload
    }  
}

