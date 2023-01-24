import React from "react";
import { useState } from "react";
import "./UserView.css";

function UserView({ allProjects, featuredSelectedCB }) {
  const [featured, setFeatured] = useState({});
  const [searchTerm, setSearchTerm] = useState({
    query: "",
    list: [],
  }); //create new searchTerm state

  const handleSearch = (e) => {
    const results = allProjects.filter((project) => {
      if (e.target.value === "") return allProjects;
      return allProjects.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearchTerm({
      query: e.target.value,
      list: results,
    });
  };

  function handleClick(id) {
    console.log("clicked");
    let selected = allProjects.find((item) => item.id === id);
    setFeatured(selected);
    // featuredSelectedCB();
    //This function is defined in the App.js parent -- called here to communicate back up to parent
  }

  return (
    <div>
      <h1>Crystal's Projects</h1>
      <div id="featured-container" className="container">
        {featured.title && (
          <div id="featured">
            <h3>Featured Project</h3>
            <h4>{featured.title}</h4>
            <img src={featured.image} alt="featured project" />
            <p className="text-justify">{featured.description}</p>
          </div>
        )}
      </div>
      <div id="container-grid" className="container">
        {/* SEARCH BAR */}
        <nav class="navbar navbar-light bg-light">
          <form class="form-block">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </nav>
        <div id="project-grid" className="row">
          {allProjects.map((project) => (
            <div id="project" key={project.id} className="col-sm-3 ">
              <h4 id={project.id}>{project.title}</h4>
              <img
                src={project.image}
                onClick={() => handleClick(project.id)}
                alt="singleProject"
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserView;
