import { useState } from "react"
import { NameElement } from "../../components/Styles/Name.element"
import { CV } from "../../data/CV"
import { Main } from "../../components/Main/Main"

export const Home = () => {
const [page, setPage] = useState("about")



const { person } = CV


  return (
    <>
    <section>
    <NameElement>
      <h1>{person.name} {person.surname}</h1>
      <h2>{person.brief}</h2>

    </NameElement>

    <button onClick={()=>setPage("about")}>Sobre mí</button>
    <button onClick={()=>setPage("projects")}>Projects</button>
    <button onClick={()=>setPage("contact")}>Contact</button>
    </section>

    <section>
    <Main page={page}/>
    </section>
    </>
   
  )
}
