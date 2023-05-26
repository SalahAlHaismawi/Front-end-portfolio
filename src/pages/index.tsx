import Head from 'next/head';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import ContactMe from '../../components/ContactMe';
import Link from 'next/link';





export default function Home() {
  return (
    <div className='bg-[#0b0c10] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#66fcf1]/80'>
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
      {/* <section id='experience' className='snap-center'>
        <Experience />
      </section> */}
      {/*skills */}
       {/* <section id='skills'className='snap-start'>
        <Skills />
       </section> */}
      {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
      {/* Contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src='https://i.imgur.com/e2yvd6a.png'/>
          </div>
        </footer>
      </Link>
      </div>   
  );
};
