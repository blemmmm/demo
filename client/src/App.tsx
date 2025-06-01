import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = useCallback(async () => {
    const response = await fetch('http://localhost:8080/tasks');
    const tasks = await response.json();
    setTasks(tasks);
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr />
      {tasks.map((task) => (
        <div key={task.id} style={{ border: '1px solid black', padding: 4, margin: 4 }}>
          <p>{task.name}</p>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </>
  )
}

export default App
