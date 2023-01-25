//Search filter -- first working draft, can be simplified.

//SETTING STATE
const [searchTerm, setSearchTerm] = useState({
  query: "",
  list: [],
});

//HANDLESEARCH FUNCTION
const handleSearch = (e) => {
  e.preventDefault();
  const results = allProjects.filter((project) => {
    if (e.target.value) {
      return project.title.toLowerCase().includes(e.target.value.toLowerCase());
    } else {
      return allProjects;
    }
  });
  //Update state
  setSearchTerm({
    query: e.target.value,
    list: results,
  });
  console.log(searchTerm.list);
};

//IN RETURN
{
  !searchTerm.query
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
    : searchTerm.list.map((project) => {
        return (
          <div key={project.id}>
            <div id="project" key={project.id} className="col-sm-3 ">
              <h4 id={project.id}>{project.title}</h4>
              <img
                src={project.image}
                onClick={() => handleClick(project.id)}
                alt="singleProject"
                className="img-fluid rounded"
              />
            </div>
          </div>
        );
      });
}
