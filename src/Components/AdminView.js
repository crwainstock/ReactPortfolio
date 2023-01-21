import React, { useState } from "react";

function AdminView() {
  const [project, setProject] = useState({
    image: "",
    title: "",
    description: "",
    id: 0,
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setProject((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form button clicked!");
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
              value={project.title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="image">Image URL</label>
            <input
              name="image"
              className="form-control"
              placeholder="https://www..."
              value={project.image}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="description">Project Description</label>
            <textarea
              className="form-control"
              id="projectDescription"
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
