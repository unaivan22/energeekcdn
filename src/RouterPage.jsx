import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import DsdabmGalleryMasonry from './DsdabmGalleryMasonry'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/dsdabmgallerymasonry' element={<DsdabmGalleryMasonry/>} />
        </Routes>
     </Router>
  )
}