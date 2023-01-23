import React, { useState } from "react";

function AdminView({ addProjectCB }) {
  const [newProject, setProject] = useState({
    image: "",
    title: "",
    description: "",
  });

  const [id, setId] = useState(5);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setProject((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    newProject.id = id;
    setId((id) => id + 1);
    e.preventDefault();
    console.log("form button clicked!");
    console.log(newProject);

    addProjectCB(newProject);

    setProject({
      image: "",
      title: "",
      description: "",
    });

    // pass data back up to parent using props.addProject();
    // don't forget to accept the props in the arguments of the function AdminView
  };

  return (
    <div className="container">
      <h1>Add a Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="title">Project Title</label>
            <input
              name="title"
              className="form-control"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="image">Image URL</label>
            <input
              name="image"
              className="form-control"
              placeholder="https://www..."
              value={newProject.image}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="description">Project Description</label>
            <textarea
              className="form-control"
              name="description"
              value={newProject.description}
              onChange={(e) => handleInputChange(e)} //This seems to update the array with each keystroke...not what I want.
              rows="3"
              placeholder="Describe your project here."
            ></textarea>
          </div>
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default AdminView;
