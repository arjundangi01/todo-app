import React, { useEffect, useState } from "react";

const Todos = () => {
  interface todoOfTodoObj {
    name: string;
  }

    const [todo, setDodo] = useState<todoOfTodoObj[]>([]);
    useEffect(() => {
        setDodo([...todo,{name:"arjun"}])
    },[])
    
  return (
    <div>
      {todo?.map((ele) => (
        <p>{ele?.name}</p>
      ))}
    </div>
  );
};

export default Todos;
