import Head from 'next/head';
import About from '../../components/About';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import ContactMe from '../../components/ContactMe';
import Link from 'next/link';
import MachineLearningSkills from "../../components/MachineLearningSkills";





export default function Home() {
  return (
    <div className='bg-[#0b0c10] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#66fcf1]/80'>
      <Head>
       <title>Salah portfolio</title>
      </Head>
      
      <Header />

      
      <section id="hero" className='snap-center snap-mandatory'>
      <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
      <About />
      </section>
      {/*=Experiences */}
      {/*{ <section id='experience' className='snap-center'>*/}

      {/*</section> }*/}


      {/*skills */}
       { <section id='skills' className='snap-start'>
        <Skills />
       </section> }
         { <section id='machinelearningskills' className='snap-start'>
        <MachineLearningSkills />
       </section> }
      {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
      {/* Contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-32 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img
                    className="h-10 w-10 rounded-full hover:grayscale-1 hover:scale-150 transform transition duration-300 ease-in-out cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/512/5973/5973800.png"
                />

            </div>
        </footer>
      </Link>
    </div>
  );
};
