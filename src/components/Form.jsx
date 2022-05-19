import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTask } from '../store';



function Form(){
  const [formData, setFormData] = useState([{
    firstInput: '',
    textArea: '',
    radio:''
  }]);

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const value = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick= (event) =>{
    event.preventDefault();
    dispatch(addTask(formData))

  }
  console.log(value);
  return(
    <form>
      <input name="firstInput" onChange={onChange} ></input>
      <textarea name="textArea" onChange={onChange}></textarea>
      <input type='checkbox' name="radio" checked={formData.radio} onChange={onChange} value='Priority'></input>
      <button type='submint' onClick={handleClick}>CrearTarea</button>
    </form>
  )
}

export default Form

