import styled from "@emotion/styled"

const DropdownStyles = styled.div`

& ul {
    width: 40px;
}

`

export const DropdownElement = ({setLanguage, language}) => {
  return (
<DropdownStyles className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {language == "spanish" ? "SPA" : "ENG"}
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item" href="#" onClick={()=> setLanguage("english")} >ENG</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=> setLanguage("spanish")}>SPA</a></li>
  </ul>
</DropdownStyles>
  )
}
