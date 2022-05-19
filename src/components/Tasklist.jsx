import { useSelector } from "react-redux";



const Tasklist = () =>{
  const tasks = useSelector ((state) =>state)
  console.log(tasks);
  return <h1>Tarea</h1>
}



export default Tasklist;