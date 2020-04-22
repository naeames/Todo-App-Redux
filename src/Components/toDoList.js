import React,{useState} from "react";
import { connect } from "react-redux";
import { deletetask, completetask, edittask,updatetask } from "../Action/action";


        

function TodoList(props) {

    const [updateditem, setUpdateditem] = useState('');
   

  return (
    <div>
      {props.list.map((element) => (
        <div >
          {element.isEditable ? (
            <div className="update-field">
              {" "}
              <input type="text"   value={updateditem}  onChange={(event)=>setUpdateditem(event.target.value)} />
             
               <button  className="btn btn-primary  btn-save" onClick={()=>props.updatetask({id:element.id,text:updateditem})}>save</button>{" "}
            </div>
          ) : (
            <div className="pr">
              <button
                className="btn btn-danger btn"
                onClick={() => {props.edittask(element.id);setUpdateditem(element.text)}}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn"
                onClick={() => props.deletetask(element.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary btn"
                onClick={() => props.completetask(element.id)}
              >
                {element.isCompleted ? "undo" : "complete"}
              </button>
              <p
                className="p"
                style={{
                  textDecoration: element.isCompleted && "line-through",
                }}
              >
                {element.text}{" "}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const mapStateProps = (state) => ({
  list: state.taskList,
});

export default connect(mapStateProps, { deletetask, completetask, edittask,updatetask })(
  TodoList
);
