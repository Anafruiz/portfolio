import "../../stylesheet/Projects.scss";
const Projects = (props) => {
  return (
    <section className="projects" id="#projects">
      <div className="projects__container">
        <h2 className="projects__container--title">Proyectos</h2>
        <ul className="projects__container--list">
          {props.dataProjects.map((item) => {
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
          })}
        </ul>
      </div>
    </section>
  );
};

// const Projects = () => {
//   <h2 className="projects" id="projects">
//     Proyectos
//   </h2>;
//   return dataProjects.map((item) => {
//     return (
//       <div className="projects">
//         <div className="projects__wrapper">
//           <div>
//             <a href={item.url} target="_blank">
//               <img src={item.img} className="projects__img" />
//             </a>
//           </div>
{
  /* <div>
            <a
              href="https://anafruiz.github.io/tv-series-searcher/"
              target="_blank"
            >
              <img src={project2} className="projects__img" />
            </a>
          </div>
          <div>
            <a
              href="https://awesome-profile-cards-magician.herokuapp.com/#/"
              target="_blank"
            >
              <img src={project3} className="projects__img" />
            </a>
          </div>
          <div>
            <a
              href="https://anafruiz.github.io/Guess-a-number/"
              target="_blank"
            >
              <img src={project4} className="projects__img" />
            </a>
          </div>
          <div>
            <a href="https://anafruiz.github.io/Pokemon-React/" target="_blank">
              <img src={project5} className="projects__img" />
            </a>
          </div> */
}
//         </div>
//       </div>
//     );
//   });
// };
export default Projects;
