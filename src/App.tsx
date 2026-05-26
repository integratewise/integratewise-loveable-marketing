import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import Home from '@/pages/Home'
import Platform from '@/pages/Platform'
import HowItWorks from '@/pages/HowItWorks'
import Pricing from '@/pages/Pricing'
import Templates from '@/pages/Templates'
import About from '@/pages/About'
import Demo from '@/pages/Demo'
import Features from '@/pages/Features'
import Contact from '@/pages/Contact'
import Resources from '@/pages/Resources'
import BusinessIntelligence from '@/pages/BusinessIntelligence'
import AccountSuccess from '@/pages/AccountSuccess'
import Careers from '@/pages/Careers'

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/account-success" element={<AccountSuccess />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/demo" element={<Demo />} />
      </Route>
    </Routes>
  </HashRouter>
)

export default App
