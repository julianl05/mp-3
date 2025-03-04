import styled from "styled-components"
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const StyledPageWraper = styled.div`
  width: 80vw; 
  margin: 0 auto;
`
function Root(){
  return(
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/education`} element={<Education />} />
      <Route path={`/experiences`} element={<Experiences />} />
      <Route path={`/projects`} element={<Projects />} />
      <Route path={`/skills`} element={<Skills />} />
      <Route path={`/activities`} element={<Activities />} />
    </Routes>
  );
}

function App() {

  return (
    <>
    </>
  )
}

export default App
