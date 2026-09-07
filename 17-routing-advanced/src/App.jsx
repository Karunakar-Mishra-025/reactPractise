import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Men from './pages/Men'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div  className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/course-details/:courseName' element={<CourseDetails />} />
        <Route path='/product' element={<Products/>}>
          <Route path='men' element={<Men/>}> </Route>
          <Route path='women' element={<Women/>}> </Route>
          <Route path='kids' element={<Kid/>}> </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App