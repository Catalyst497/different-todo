import { DragEvent, forwardRef, useState } from "react";
import { FaGripHorizontal } from "react-icons/fa";
import { X } from "react-feather";

interface props {
  tsk: string;
  i: number;
  setDraggedItemId: any;
  deleteTask: (index:number) => undefined;
  handleDragOver: (e: DragEvent) => undefined;
  handleDrop: (e: DragEvent, dropId: number) => undefined;
}
const Task = forwardRef<HTMLDivElement, props>(
  (
    {
      tsk,
      i,
      setDraggedItemId,
      handleDragOver,
      handleDrop,
      deleteTask
    },
    ref
  ) => {
  const [dragging, setDragging] = useState(false);

    const handleDragStart = (e: DragEvent, id: number): undefined => {
      setDraggedItemId(id);
      setDragging(true);
      e.dataTransfer.effectAllowed = "move";
    };
    const handleDragEnd = ():undefined => {
      setDragging(false)
      setDraggedItemId(null);
    }
    return (
      <li
        id={`${i}`}
        draggable
        onDragStart={(e) => handleDragStart(e, i)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, i)}
        onDragEnd={handleDragEnd}

        className={`task flex items-center justify-between gap-4 bg-muted-teal border border-teal rounded-lg p-2 ${
          dragging ? "opacity-0 cursor-grabbing" : "opacity-1 cursor-grab "
        } transition-[300ms]`}
      >
        <div className="dragIcon" ref={ref}>
          <FaGripHorizontal />
        </div>
        <div className="flex-1">{tsk}</div>
        <div onClick={() => deleteTask(i)}>
          <X />
        </div>
      </li>
    );
  }
);

export default Task;
