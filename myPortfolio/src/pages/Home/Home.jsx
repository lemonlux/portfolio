import { useState } from "react"
import { NameElement } from "../../components/Styles/Name.element"
import { CV } from "../../data/CV"
import { Main } from "../../components/Main/Main"
import { SectionElement } from "../../components/Styles/Section.element"
import { FlexDir } from "../../components/Layout/FlexDir"
import { useLanguage } from "../../context/languageContext"
import { CVENG } from "../../data/CVENG"
import { Links } from "../../components"

export const Home = () => {
const [page, setPage] = useState("about")

const { language, setLanguage, toggleLanguage } = useLanguage()

 const { person } = language == "spanish" ? CV : CVENG

  return (
    <>
    <FlexDir >
      <button onClick={()=> toggleLanguage()}>{language == "spanish" ? "ENG" : "SPA"}</button>
    <SectionElement width={"40vw"}>
    <NameElement>
      <img src={person.image} alt="imagen de perfil"/>
      <h1>{person.name} {person.surname}</h1>
      <h3>{person.brief}</h3>
      <Links person={person}/>

    </NameElement>

    <button onClick={()=>setPage("about")}>{language == "spanish" ? "Sobre mi" : "About me"}</button>
    <button onClick={()=>setPage("projects")}>{language == "spanish" ? "Proyectos" : "Projects"}</button>
    <button onClick={()=>setPage("contact")}>{language == "spanish" ? "Contacto" : "Contact"}</button>
    </SectionElement>

    <SectionElement width={"60vw"}>
    <Main page={page}/>
    </SectionElement>
    </FlexDir>
    </>
   
  )
}
