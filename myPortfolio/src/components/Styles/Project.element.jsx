import styled from '@emotion/styled'

const ProjectElementStyle = styled.article`

& img{
    height: 20vh;
}

`



export const ProjectElement = ({children}) => {
  return (
    <ProjectElementStyle>{children}</ProjectElementStyle>
  )
}
