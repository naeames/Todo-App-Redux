const initialState = {
  taskList: [
    { id: 1, text: "Task 1", isCompleted: false, isEditable: false },
    { id: 2, text: "Task 2", isCompleted: false, isEditable: false },
    { id: 3, text: "Task 3", isCompleted: false, isEditable: false },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        taskList: [...state.taskList, action.payload],
      };
    case "DELETE_TASK":
      return {
        taskList: state.taskList.filter(
          (element) => element.id !== action.payload
        ),
      };
    case "COMPLETE_TASK":
      return {
        taskList: state.taskList.map((element) =>
          element.id === action.payload
            ? { ...element, isCompleted: !element.isCompleted }
            : element
        ),
      };
    case "EDIT_TASK":
      return {
        taskList: state.taskList.map((element) =>
          element.id === action.payload
            ? { ...element, isEditable: !element.isEditable }
            : element
        ),
      };
      case "UPDATE_TASK":
          return{
            taskList: state.taskList.map((element) =>
            element.id === action.payload.id
              ? { ...element, isEditable: !element.isEditable,text:action.payload.text }
              : element
          ),
          }
    default:
      return state;
  }
}
