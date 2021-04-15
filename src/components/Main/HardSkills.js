import "../../stylesheet/Skills.scss";

const TechnicalSkills = (props) => {
  return (
    <section className="skills" id="hardSkills">
      <div className="skills__container">
        <h2 className="skills__container--title">Hard Skills</h2>
        <ul className="skills__container--list">
          {props.hard.map((item) => {
            return (
              <li className="skills__container--item" key={item.id}>
                {item.name}
                <img
                  className="skills__container--logo"
                  src={item.img}
                  alt={`Logo de ${item.name}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TechnicalSkills;
