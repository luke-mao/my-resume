import React from 'react'
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';

export default function Resume() {
  return (
    <div className="container mx-auto px-5 md:px-15 py-6 md:py-10">
      <Header />
      <Experience />
      <Education />
      <Projects />
    </div>
  )
}
