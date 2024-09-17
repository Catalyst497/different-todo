import { ChangeEvent, useState, KeyboardEvent } from "react";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "./GlobalRedux/slices/AppSlice";
function App() {
  const dispatch = useDispatch();
  const {tasks} = useSelector((st:any) => st.app) 
  const [taskInput, setTaskInput] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update taskInput
    setTaskInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add new task to tasks array
    dispatch(setTasks([...tasks, taskInput]));
    // Clear taskInput
    setTaskInput("");
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key  === "Enter") {
      handleSubmit(e);
    }
  };
  
  return (
    <main className="min-h-screen flex justify-center items-center font-lato">
      <div className="bg-off-white text-dark-slate-gray p-4 lg:p-8 rounded-lg">
        <div className="title font-poppins font-semibold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
          To-do With a Difference
        </div>
        <div>
          <form
            className="flex gap-4 items-center mt-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              onKeyDown={handleEnter}
              onChange={handleChange}
              className="w-full p-2 rounded-md border-light-gray border-[2px] focus:outline-none focus:border-teal placeholder:text-light-gray"
              placeholder="Add a new task..."
              value={taskInput}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-teal px-4 py-2 text-white rounded-lg"
            >
              Add
            </button>
          </form>
          <TaskList />
        </div>
      </div>
    </main>
  );
}

export default App;
