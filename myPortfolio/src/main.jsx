import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx'
import { LanguageContextProvider } from './context/languageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
    <RouterProvider router={router}/>
    </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
