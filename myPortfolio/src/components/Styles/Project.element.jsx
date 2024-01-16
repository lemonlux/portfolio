import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const ProjectElementStyle = styled.article`

border-radius: 10px;
border: 1px solid ${({theme}) => theme.palette.border.main};


& img{
    height: 20vh;
}

`



export const ProjectElement = ({children}) => {
  const { theme } = useTheme()

  return (
    <ProjectElementStyle theme={theme}>{children}</ProjectElementStyle>
  )
}
