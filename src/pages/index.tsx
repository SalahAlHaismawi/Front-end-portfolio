import Head from 'next/head';
import About from '../../components/About';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import ContactMe from '../../components/ContactMe';
import MachineLearningSkills from '../../components/MachineLearningSkills';

export default function Home() {
  return (
    <div
      className='bg-[#0b0c10] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#66fcf1]/80'
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <Head>
        <title>Salah portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-center snap-mandatory'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='machinelearningskills' className='snap-start'>
        <MachineLearningSkills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
}
