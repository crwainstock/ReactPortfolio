import React, { useState } from "react";
import AdminView from "./Components/AdminView";
import UserView from "./Components/UserView";
import "./App.css";
import MyProjects from "./Components/MyProjects";

//Import default data here eventually

function App() {
  const [isAdmin, setIsAdmin] = useState(true); //Like isAdmin boolean
  const [allProjects, setProjects] = useState(MyProjects); //Like allProjects array

  //Adds new project to allProjects array
  const handleAddProject = (newProject) => {
    let newArray = [...allProjects, newProject];
    setProjects(newArray);
  };

  return (
    <div>
      <nav>
        <button
          className={isAdmin ? "btn btn-danger" : "btn btn-warning"}
          onClick={() => setIsAdmin(true)}
        >
          Admin
        </button>
        <button
          className={!isAdmin ? "btn btn-danger" : "btn btn-warning"}
          onClick={() => setIsAdmin(false)}
        >
          User
        </button>
      </nav>
      <main>
        {isAdmin ? (
          <AdminView
            addProjectCB={handleAddProject} //Omg. losing track of what I'm doing. This isn't done yet.
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
