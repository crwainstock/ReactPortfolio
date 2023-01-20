import React, { useState } from "react";
import AdminView from "./Components/AdminView";
import UserView from "./Components/UserView";
import "./App.css";

//Import default data here eventually

function App() {
  const [isAdmin, setIsAdmin] = useState(true); //Like isAdmin boolean
  const [projects, setProjects] = useState([]); //Like allProjects array

  const handleAddProject = (newProject) => {
    setProjects((state) => [...state, newProject]);
  };

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
    //I don't get how this changes the isAdmin state. Does it? How can I conditionally render the view?
  };
  //Is render() not required? No, because the app component is a function? Why tho? Should this component be a class or a function?
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
      {isAdmin ? (
        <AdminView addProject={(newProject) => handleAddProject(newProject)} />
      ) : (
        <UserView />
      )}

      {/* Showing both views all the time. Not connected to button events. */}
    </div>
  );
}

export default App;
