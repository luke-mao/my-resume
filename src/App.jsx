import React from 'react'
import Resume from '@/pages/Resume';
import Email from './components/Email';

export default function App() {
  return (
    <div className="relative min-h-screen max-w-screen">
      <Resume />
      <Email />
    </div>
  )
}
