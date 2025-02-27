import { Link } from "react-router-dom";
import perfil from "../../images/perfil.jpg";
import "boxicons";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <Link to="/home">
        <button className="btnAbout">← To Back</button>
      </Link>
      <h1 className="titleAbout">About The Developer</h1>
      <img src={perfil} alt="perfil desarrollador" className="imgAbout" />
      <p className="textAbout">
        {`Hello! I'm Raul Jesús Sierra, a Systems Engineering student passionate
        about FullStack Web Development. I pride myself on offering my knowledge
        in React, Redux, JavaScript, and HTML. My main objective is to be able
        to help companies and individuals in the creation and maintenance of a
        website and a Single-page application (SPA) and I am committed to
        providing effective and quality solutions for my clients.`}
      </p>
      <p className="textAbout">
        My approach is based on respect, commitment and responsibility. I
        believe that the world is taking leaps and bounds in the technological
        field and that any business needs a web positioning. I am always looking
        for new opportunities to grow and learn, keeping myself updated with the
        latest trends and advances in my field.
      </p>
      <p className="textAbout">
        If you are looking for web or React development I am excited to explore
        collaboration possibilities. Feel free to contact me through my LinkedIn
        profile to discuss how I can help you achieve your goals.
      </p>
      <p className="textAbout">
        I look forward to working with you and contributing to the success of
        your project!
      </p>
      <div>
        <Link to="https://github.com/RaulSierradev/" target="_blank">
          <box-icon type="logo" name="github" size="lg"></box-icon>
        </Link>
        <Link to="https://www.linkedin.com/in/raúl-jesús-sierra-díaz-56a7489b" target="_blank">
          <box-icon type="logo" name="linkedin-square" size="lg"></box-icon>
        </Link>
      </div>
    </div>
  );
}
