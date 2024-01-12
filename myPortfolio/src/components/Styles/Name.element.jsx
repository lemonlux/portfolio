import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const NameStyle = styled.div`


& img{
  width: 100px;
  
}

`


export const NameElement = ({children}) => {
    const { theme } = useTheme()

  return (
    <NameStyle theme={theme}>{children}</NameStyle>
  )
}
