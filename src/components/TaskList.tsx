import { useState, DragEvent, useRef } from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../GlobalRedux/slices/AppSlice";

function TaskList() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((st: any) => st.app);
  const draggedIcon = useRef<HTMLDivElement | null>(null);
  const [draggedItemId, setDraggedItemId] = useState<number | null>(null);
  const deleteTask = (index:number):undefined => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    dispatch(setTasks(updatedTasks));
  }

  // Function for when the draggedItem is draggedOver an 
  const handleDragOver = (e: DragEvent): undefined => {
    // Prevent default and add the move effect to function.
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (e: DragEvent, dropId: number): undefined => {
    e.preventDefault();

    // Checks draggedItem is actually exists and if item is not being dropped in the same location. 
    if (draggedItemId !== null && draggedItemId !== dropId) {
      // This checks for the location of the draggedItem on the tasks array.
      const dragStartIndex = tasks.findIndex(
        (_: any, i: number) => i === draggedItemId
      );
      // This checks for the location of the drop item on the tasks array.
      const dropItemIndex = tasks.findIndex(
        (_: any, i: number) => i === dropId
      );
      // This updates the new position of the draggedItem in the task array.
      const updatedTasks = [...tasks];
      const [removedTask] = updatedTasks.splice(dragStartIndex, 1);
      updatedTasks.splice(dropItemIndex, 0, removedTask);
      dispatch(setTasks(updatedTasks));
    }
  };

  return (
    <ul
      className="tasklist mt-8 flex flex-col gap-4 "
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      {/* Mapping through the tasks array. */}
      {tasks.map((tsk:string, i:number) => (
        <Task
          key={i}
          ref={draggedIcon}
          tsk={tsk}
          i={i}
          deleteTask={deleteTask}
          setDraggedItemId={setDraggedItemId}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </ul>
  );
}

export default TaskList;
