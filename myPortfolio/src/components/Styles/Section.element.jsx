import styled from "@emotion/styled"

const SectionElementStyle = styled.section`

padding: 1rem;
height: 100vh;
width: ${({width})=> width};

`


export const SectionElement = ({children, width}) => {
  return (
    <SectionElementStyle width={width}>{children}</SectionElementStyle>
  )
}
