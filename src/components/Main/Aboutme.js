import "../../stylesheet/Aboutme.scss";
import pic from "../../images/profile.png";
import pdf from "../../source/AnaFernandez.pdf";

const Aboutme = () => {
  const AnaFernandez_pdf = pdf;

  return (
    <>
      <div className="aboutme" id="aboutme">
        <h2 className="aboutme__title">Sobre mí</h2>
        <img src={pic} className="aboutme__pic" />

        <p className="aboutme__text ">
          ¡Hola, soy Ana! Profesora de formación pero profesionalmente dedicada
          al turismo, decidí dar un cambio y adentrarme en el mundo tecnológico
          que siempre me gustó, en especial el desarrollo front-end.
        </p>
        <p className="aboutme__text">
          Esto me llevó a realizar un bootcamp en Adalab, donde he adquirido
          conocimientos de programación, el manejo de las herramientas
          necesarias para ello y, sobre todo, si algo he aprendido en estos
          meses es a trabajar en equipo y saber que el éxito depende de ello.
        </p>

        <p className="aboutme__text">
          Me considero además una persona dinámica, trabajadora y muy
          entusiasta.
        </p>
        <button className="aboutme__button third">
          <a
            href={pdf}
            download={AnaFernandez_pdf}
            className="aboutme__button--text"
          >
            Ver CV
          </a>
        </button>
      </div>
    </>
  );
};
export default Aboutme;
