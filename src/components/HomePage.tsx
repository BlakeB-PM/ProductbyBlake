import { Hero } from './Hero'
import { About } from './About'
import { Experience } from './Experience'
import { Transition } from './Transition'
import { Projects } from './Projects'
import { SkillsEducation } from './SkillsEducation'
import { Contact } from './Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Transition />
      <Projects />
      <SkillsEducation />
      <Contact />
    </>
  )
}
