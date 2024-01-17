import styled from "@emotion/styled"

const H2ElementStyled = styled.h2`

 font-family: "Fira Code";
font-size: ${({size})=> size};

`


export const H2Element = ({children, size}) => {
  return (
    <H2ElementStyled size={size}>{children}</H2ElementStyled>
  )
}
