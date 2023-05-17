import React, { useEffect, useState } from "react";
import Task from "./Task";
import "./Home.css";

function Home() {
    const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  const [formData, setFormData] = useState(initialArray);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const formhendler = (e) => {
    e.preventDefault();
    setFormData([...formData, data]); // before it iam doing that is here setFormData([...formData, data.title, data.desctription,]); so this is give me error
    
    setData({ title: "", description: "" });
  };

  const deleteTask = (index) => {
    const fileteredArr = formData.filter((val, ind) => {
      return ind !== index;
    });
    setFormData(fileteredArr);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(formData));
  }, [formData]);
  

  return (
    <>
      <div className="container">
        <form onSubmit={formhendler}>
          <input
            type="text"
            placeholder="This is Titile box"
            name="title"
            value={data.title}
            onChange={change}
          />
          <textarea
            placeholder="This is Description box"
            name="description"
            value={data.description}
            onChange={change}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="output">
          {formData.map((item, index) => (
            <Task
              key={index}
              title={item.title}
              description={item.description}
              deletetask={deleteTask}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
