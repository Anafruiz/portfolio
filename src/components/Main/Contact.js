import "../../stylesheet/Contact.scss";

const Contact = (props) => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contacto</h2>
      <ul className="contact__logos">
        {props.contact.map((item) => {
          return (
            <li className="contact__logos--item" key={item.id}>
              <a href={item.name} target="_blank">
                <img
                  className="contact__img"
                  src={item.img}
                  alt={`Logo de ${item.name}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Contact;
