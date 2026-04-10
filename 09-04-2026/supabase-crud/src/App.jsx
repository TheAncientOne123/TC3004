import { useEffect, useState } from "react";
import supabase from "./supabase-client";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    consulta();
  }, []);

  const consulta = async () => {
    const { data, error } = await supabase.from("Reservation").select("*");
    if (error) {
      console.log("Error de conexion en consulta: ", error);
    } else {
      setTodoList(data);
    }
  };

  const addTodo = async () => {
    const newTodoData = { Reservation: newTodo, isReserved: false };
    const { error } = await supabase.from("Reservation").insert([newTodoData]);
    if (error) {
      console.log("Error adding todo: ", error);
    } else {
      setNewTodo("");
      consulta();
    }
  };

  const completeTask = async (id, isReserved) => {
    const { error } = await supabase
      .from("Reservation")
      .update({ isReserved: !isReserved })
      .eq("id", id);
    if (error) {
      console.log("Error toggling task: ", error);
    } else {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isReserved: !isReserved } : todo
        )
      );
    }
  };

  const deleteTask = async (id) => {
    const { error } = await supabase.from("Reservation").delete().eq("id", id);
    if (error) {
      console.log("Error deleting task: ", error);
    } else {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <h1>Reservation List</h1>
      <div>
        <input
          type="text"
          placeholder="New Reservation..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Reservation</button>
      </div>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Reservation</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.Reservation}</td>
              <td>{todo.isReserved ? "Reserved" : "Pending"}</td>
              <td>
                <button onClick={() => completeTask(todo.id, todo.isReserved)}>
                  {todo.isReserved ? "Undo" : "Reserve"}
                </button>
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
