import React from 'react'
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Summary from '@/components/Summary';

export default function Resume() {
  return (
    <div className="container mx-auto px-6 py-6 md:pt-10 w-full md:w-3/4">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Projects />
    </div>
  )
}
