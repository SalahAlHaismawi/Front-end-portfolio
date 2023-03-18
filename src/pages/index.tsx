import Head from 'next/head';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';





export default function Home() {
  return (
    <div className='bg-[#0b0c10] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
       <title>Salah portfolio</title>
      </Head>
      
      <Header />

      
      <section id="hero" className='snap-center'>
      <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
      <About />
      </section>
      {/*Experiences */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      {/*skills */}
       <section id='skills'className='snap-start'>
        <Skills />
       </section>
      {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
      {/* Contact me */}
      </div>   
  );
};
