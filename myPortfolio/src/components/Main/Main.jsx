import { useLanguage } from "../../context/languageContext";
import { CV } from "../../data/CV";
import { CVENG } from "../../data/CVENG";
import { H2Element } from "../Styles/H2.element";
import { ProjectElement } from "../Styles/Project.element";

export const Main = ({ page }) => {
  const { language } = useLanguage();
  const { projects, person } = language == "spanish" ? CV : CVENG;
  switch (page) {
    case "about":
      return (
        <>
          <H2Element size="40px">#<span>{language == "spanish" ? "sobre mi" : "about me"}</span></H2Element>
          {language == "spanish" ? (
            <>
              <p>
                Siempre me ha interesado mucho la informática, tanto que, aunque
                estudié química, estuve 2 años como alumna interna durante la
                carrera desarrollando un proyecto de{" "}
                <span>química computacional</span>, en el que más tarde basé
                mi TFG.
              </p>
              <p>
                Después de la carrera, hice un Máster en Ciencia e Industria
                cosmética y empecé trabajando como Analista de Laboratorio,
                puesto el cual he desempeñado durante 4 años, hasta que por fin
                me decidí a seguir formándome en lo que realmente me interesa:{" "}
                <span>la programación</span>.
              </p>
              <p>
                Actualmente me encuentro <span>buscando un trabajo</span>{" "}
                que me brinde la oportunidad de adentrarme laboralmente en el
                sector del web
                <span>
                  {" "}
                  mientras desarrollo proyectos por mi cuenta y sigo formándome
                </span>{" "}
                en las tecnologías que me interesan.
              </p>
              <p>
                Como curiosidad, me encanta dedicar mi tiempo libre a la
                ilustración digital, un hobbie que tengo desde hace años.
              </p>
            </>
          ) : (
            <>
              <p>
                I have always been very interested in IT. Although I studied
                chemistry at university, I spent 2 years as a boarding student
                working on a <span>computational chemistry</span> project.
                This later became the foundation of my Bachelor's Degree Final
                Project.
              </p>
              <p>
                Soon after I finished my Chemistry Degree, I pursued a Master's
                in Cosmetic Science and Industry. I started my career as a
                Laboratory Analyst, a position I held for 4 years, until I
                finally decided to further my education in what truly interests
                me: <span>become a developer</span>.
              </p>
              <p>
                Currently, I am actively <span>seeking employment</span>{" "}
                that will allow me to start working as a web developer.
                Meanwhile, <span>I am working on some personal projects and continuing
                studying</span> languages and technologies that I'm interested in.
              </p>
              <p>
                As a side note, I enjoy spending my free time drawing digital illustrations, a hobby I have been passionate about for quite a few years.
              </p>
            </>
          )}
          <p>{person.tech}</p>
              <p>{person.plusInfo}</p>
        </>
      );
    case "projects":
      return (
        <>
          
            <H2Element size="40px">#<span>{language == "spanish" ? "proyectos" : "projects"}</span></H2Element>
            
            {projects.map((project) => (
              <>
              <ProjectElement>
                <h4><span>{project.name}</span></h4>
                <img src={project.image} alt={project.name} />
                <p>{project.description}</p>
                <a></a>
                </ProjectElement>
              </>
            ))}

        </>
      );
    case "contact":
      return (
        <>
          <H2Element size="40px">#<span>{language == "spanish" ? "contacto" : "contact"}</span></H2Element>
          <p></p>
        </>
      );

    default:
      break;
  }
};
