import React, { Suspense, lazy } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom"


const LandingPage=lazy(()=> import('../src/components/landingPage'));
const WhyChooseUs=lazy(()=> import('../src/components/chooseUs'));
const ClientsSection=lazy(()=> import('../src/components/clients'));
const ContentReach=lazy(()=> import('../src/components/contentReach'));
const ContentWriteServices=lazy(()=> import('../src/components/contentWrite'));
const WorkProcess=lazy(()=>import('../src/components/workingProcess'));
const ContentSection=lazy(()=> import('../src/components/talkContent'));
const LatestProjects=lazy(()=>import('../src/components/project'));
const Testimonials=lazy(()=> import('../src/components/testimony'));
const FooterContent=lazy(()=>import('../src/components/footer'))

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
      <LandingPage />
      <WhyChooseUs />
      <ClientsSection />
      <ContentReach />
      <ContentWriteServices />
      <WorkProcess />
      <ContentSection />
      <LatestProjects />
      <Testimonials />
      <FooterContent />
      </>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
