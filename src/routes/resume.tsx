import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { ResumeIntro } from '../components/resume/ResumeIntro'
import { ResumeExperience } from '../components/resume/ResumeExperience'
import { ResumeProjects } from '../components/resume/ResumeProjects'
import { ResumeAwards } from '../components/resume/ResumeAwards'
import { ResumeSkills } from '../components/resume/ResumeSkills'
import { ResumeContacts } from '../components/resume/ResumeContacts'
import { Footer } from '../components/sections/Footer'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
  head: () => ({
    meta: [
      {
        title: 'Резюме — Дария',
      },
    ],
  }),
})

function ResumePage() {
  useEffect(() => {
    document.title = 'Резюме — Дария'
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full flex-1 pt-28 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <ResumeIntro />
          <ResumeExperience />
          <ResumeProjects />
          <ResumeAwards />
          <ResumeSkills />
          <ResumeContacts />
        </div>
      </main>
      <Footer />
    </div>
  )
}