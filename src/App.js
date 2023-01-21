import React, { useState } from "react";
import AdminView from "./Components/AdminView";
import UserView from "./Components/UserView";
import "./App.css";
import MyProjects from "./Components/MyProjects";

//Import default data here eventually

function App() {
  const [isAdmin, setIsAdmin] = useState(true); //Like isAdmin boolean
  const [allProjects, setProjects] = useState(MyProjects); //Like allProjects array

  const handleAddProject = (newProject) => {
    setProjects((state) => [...state, newProject]);
  };

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
          <UserView
            allProjects={allProjects}
            // featuredSelectedCB={featuredSelected}
          />
        )}
      </main>
    </div>
  );
}

export default App;
