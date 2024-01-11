import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const NameStyle = styled.div`
font-family: 'Rubik';

& h1{


}

`


export const NameElement = ({children}) => {
    const { theme } = useTheme()

  return (
    <NameStyle theme={theme}>{children}</NameStyle>
  )
}
