import React from "react";
import { useState } from "react";
import "./UserView.css";

function UserView({ allProjects }) {
  const [featured, setFeatured] = useState({});
  const [searchTerm, setSearchTerm] = useState({
    query: "",
    list: [],
  }); //create new searchTerm state
  //Function to handle searching -- filter allProjects based on value input in search bar
  const handleSearch = (e) => {
    e.preventDefault();
    const results = allProjects.filter((project) => {
      if (e.target.value) {
        return project.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      } else {
        return allProjects;
      }
    });
    //Update state
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
        <nav className="navbar navbar-light bg-light">
          <form className="form-block">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
              value={searchTerm.query}
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </nav>
        {/*             
        - If search bar is empty, return allProjects as usual (original code)
        - If search bar has text, return all projects with titles that include that letter(s) --.toLowerCase to make it not case sensitive
         */}
        <div id="project-grid" className="row">
          {searchTerm.query === ""
            ? allProjects.map((project) => (
                <div id="project" key={project.id} className="col-sm-3 ">
                  <h4 id={project.id}>{project.title}</h4>
                  <img
                    src={project.image}
                    onClick={() => handleClick(project.id)}
                    alt="singleProject"
                    className="img-fluid rounded"
                  />
                </div>
              ))
            : searchTerm.list.map((allProjects) => {
                return (
                  <div>
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
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default UserView;
