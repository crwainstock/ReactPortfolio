import React from "react";
import { useState } from "react";
import "./UserView.css";

function UserView({ allProjects }) {
  const [featured, setFeatured] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick(id) {
    console.log("clicked");
    let selected = allProjects.find((item) => item.id === id);
    setFeatured(selected);
  }

  //This resource was really useful as a guide for implementing the search bar: https://www.makeuseof.com/react-search-bar-filters-data-create/
  //I would like to render a message saying "No results found" if no projects match search. But I'm not sure how to do it.
  //Possible resource: https://dev.to/samba_code/nested-ternary-statements-in-react-jsx-35kp
  //Search bar code simplified, original version lives in extra.js in components folder

  const filteredArray = allProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </form>
        </nav>
        {/*             
        - If search bar is empty, return allProjects as usual (original code)
        - If search bar has text, return all projects with titles that include that letter(s) --.toLowerCase to make it not case sensitive
         */}
        <div id="project-grid" className="row">
          {filteredArray.length === 0 ? (
            <h3>No results found.</h3>
          ) : (
            filteredArray.map((project) => (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default UserView;
