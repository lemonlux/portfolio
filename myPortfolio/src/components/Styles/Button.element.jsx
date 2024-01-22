import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"

const ButtonElementStyled = styled.button`

background: none;
	border: none;
	padding: 0;
    font-size: 20px;
    padding: 4px;
    cursor: pointer;
    font-family: inherit;


  :hover {
        color: ${({theme})=> theme.palette.color.enhance};
        font-family: "Fira Code";
        font-weight: 600;

    }

    :hover::before{
      color: white;
      content: "#"
    }

`



export const ButtonElement = ({children, onClick}) => {

    const { theme } = useTheme()


  return (
    <ButtonElementStyled onClick={onClick} theme={theme}>{children}</ButtonElementStyled>
  )
}
