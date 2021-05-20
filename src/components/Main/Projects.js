import "../../stylesheet/Projects.scss";
const Projects = (props) => {
  const projects = props.dataProjects.map((item) => {
    return (
      <li className="projects__container--item" key={item.id}>
        <a href={item.url} target="_blank">
          <img src={item.img} className="projects__container--logo" />
        </a>
        <span className="projects__container--name">{item.name}</span>
        <div className="projects__container--buttons">
          <button className="projects__container--button third">
            <a
              href={item.github}
              className="projects__container--href"
              target="_blank"
            >
              Código <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </button>
          <button className="projects__container--button third">
            <a
              href={item.url}
              className="projects__container--href"
              target="_blank"
            >
              Demo <i class="fas fa-desktop"></i>
            </a>
          </button>
        </div>
      </li>
    );
  });

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__container--title">Proyectos</h2>
        <ul className="projects__container--list">{projects}</ul>
      </div>
    </section>
  );
};
export default Projects;
