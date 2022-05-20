import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store";

function Form() {
  const [formData, setFormData] = useState({
    firstInput: "",
    textArea: "",
    radio: false,
  });
  const dispatch = useDispatch();

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addTask([formData]));
    setFormData({ firstInput: "", textArea: "", radio: false });
  };
  return (
    <form>
      <input name="firstInput" onChange={onChange} value={formData.firstInput}></input>
      <textarea name="textArea" onChange={onChange} value={formData.textArea}></textarea>
      <input
        type="checkbox"
        name="radio"
        checked={formData.radio}
        onChange={() => {formData.radio ? setFormData({...formData, radio:false}) : setFormData({...formData, radio:true}) } }
      ></input>
      <button type="submint" onClick={handleClick}>
        CrearTarea
      </button>
    </form>
  );
}

export default Form;
