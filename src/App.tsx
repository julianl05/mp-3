import styled from "styled-components"
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Education from "./components/Education"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Activities from "./components/Activities"

const StyledPageWraper = styled.div`
  width: 80vw; 
  margin: 0 auto;
`

const StyledContentContainer = styled.div`
  display: flex; 
  flex-direction: row; 

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`


function Root(){
  return(
    <StyledPageWraper>
      <Header/>
      <StyledContentContainer>
        <Navbar/>
        <Routes>
          <Route path={`/*`} element={<Home />} />
          <Route path={`/education`} element={<Education />} />
          <Route path={`/experiences`} element={<Experiences />} />
          <Route path={`/projects`} element={<Projects />} />
          <Route path={`/skills`} element={<Skills />} />
          <Route path={`/activities`} element={<Activities />} />
        </Routes>
      </StyledContentContainer>
      <Footer/>
    </StyledPageWraper>
  );
}

const router = createBrowserRouter(
  [{path:"*", Component: Root},]
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
