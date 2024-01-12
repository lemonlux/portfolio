import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const NameStyle = styled.div`


& h1{


}

`


export const NameElement = ({children}) => {
    const { theme } = useTheme()

  return (
    <NameStyle theme={theme}>{children}</NameStyle>
  )
}
