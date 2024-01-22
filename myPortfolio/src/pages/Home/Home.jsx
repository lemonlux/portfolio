import { useState } from "react"
import { NameElement } from "../../components/Styles/Name.element"
import { CV } from "../../data/CV"
import { Main } from "../../components/Main/Main"
import { SectionElement } from "../../components/Styles/Section.element"
import { FlexDir } from "../../components/Layout/FlexDir"
import { useLanguage } from "../../context/languageContext"
import { CVENG } from "../../data/CVENG"
import { Links } from "../../components"
import { H2Element } from "../../components/Styles/H2.element"
import { ButtonElement } from "../../components/Styles/Button.element"
import { DropdownElement } from "../../components/Styles/Dropdown.element"

export const Home = () => {
const [page, setPage] = useState("about")

const { language, setLanguage, toggleLanguage } = useLanguage()

 const { person } = language == "spanish" ? CV : CVENG

  return (
    <>
    <FlexDir >

      {/* <ButtonElement onClick={()=> toggleLanguage()}>{language == "spanish" ? "ENG" : "SPA"}</ButtonElement> */}
<DropdownElement setLanguage={setLanguage} language={language}/>
    <SectionElement width={"40vw"}>
    <NameElement>
      <img src={person.image} alt="imagen de perfil"/>
      <h1>{person.name} {person.surname}</h1>
      <H2Element size="20px"><span>{person.brief}</span></H2Element>

    </NameElement>

    <ButtonElement onClick={()=>setPage("about")}>{language == "spanish" ? "Sobre mi" : "About me"}</ButtonElement>
    <ButtonElement onClick={()=>setPage("projects")}>{language == "spanish" ? "Proyectos" : "Projects"}</ButtonElement>
    <ButtonElement onClick={()=>setPage("contact")}>{language == "spanish" ? "Contacto" : "Contact"}</ButtonElement>
    <Links person={person}/>
    </SectionElement>

    <SectionElement width={"60vw"}>
      
    <Main page={page}/>
    </SectionElement>
    </FlexDir>
    </>
   
  )
}
