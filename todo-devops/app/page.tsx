"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  return (
    <main>
      <h1>TODO APPLICATION</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button>Add Task</button>

      <ul>
        <li>
          <input type="checkbox" />
          Finish assignment
          <button>Delete</button>
        </li>

        <li>
          <input type="checkbox" />
          Study Next.js
          <button>Delete</button>
        </li>

        <li>
          <input type="checkbox" defaultChecked />
          Setup Git repository
          <button>Delete</button>
        </li>
      </ul>
    </main>
  );
}