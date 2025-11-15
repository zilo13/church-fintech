import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import './styles/site.css'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Sermons = lazy(() => import('./pages/Sermons'))
const Events = lazy(() => import('./pages/Events'))
const About = lazy(() => import('./pages/About'))
const Give = lazy(() => import('./pages/Give'))
const Contact = lazy(() => import('./pages/Contact'))
const Live = lazy(() => import('./pages/Live'))

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/live" element={<Live />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
