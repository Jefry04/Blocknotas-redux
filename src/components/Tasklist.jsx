import { useSelector } from "react-redux";



const Tasklist = () =>{
  const tasks = useSelector ((state) =>state.tasks)
  console.log("lista de tareas",tasks);
  return <>{tasks.map((task, idx) => (
    <li key={idx}>{task.firstInput}</li>
  ))}</>
}



export default Tasklist;