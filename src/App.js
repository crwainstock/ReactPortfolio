import React, { useState } from "react";
import AdminView from "./Components/AdminView";
import UserView from "./Components/UserView";
import "./App.css";

//Import default data here eventually

function App() {
  const [isAdmin, setIsAdmin] = useState(true); //Like isAdmin boolean
  const [allProjects, setProjects] = useState([]); //Like allProjects array

  const handleAddProject = (newProject) => {
    setProjects((state) => [...state, newProject]);
  };
  //Where should I push the newProject to the allProjects?

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };

  return (
    <div>
      <nav>
        {isAdmin ? (
          <button
            className="btn btn-danger"
            onClick={() => handleChangeView(true)}
          >
            ADMIN
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => handleChangeView(true)}
          >
            ADMIN
          </button>
        )}
        {isAdmin ? (
          <button
            className="btn btn-warning"
            onClick={() => handleChangeView(false)}
          >
            USER
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => handleChangeView(false)}
          >
            USER
          </button>
        )}
      </nav>
      <main>
        {isAdmin ? (
          <AdminView
            addProject={(newProject) => handleAddProject(newProject)}
          />
        ) : (
          <UserView />
        )}
      </main>
    </div>
  );
}

export default App;
