import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

// assets
import greeting from '../assets/greeting.svg'
import resume from '../assets/resume.pdf'

// components
import { Skills } from '../components/Cards'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

// utils
import { scrollToSection } from '../utils/utils'

const navigation = [
  { name: 'Skills', sectionId: 'skills' },
  { name: 'Projects', sectionId: 'projects' },
  { name: 'Contact', sectionId: 'contact' },
  { name: 'Resume', sectionId: '' },
]

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-slate-900">
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-indigo-600 text-white focus:outline-none hover:bg-indigo-500 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L6 8m6-6l6 6m-6-6v18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <header className="absolute inset-x-0 top-0 z-50" id="home">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div>
            <a
              href="/"
              className="hero text-4xl text-white m-auto no-underline"
              style={{ position: 'relative', fontFamily: 'Merriweather Sans, sans-serif' }}
            >
              RK
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.sectionId}`}
                className="text-sm font-semibold leading-6 text-white no-underline"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.sectionId)
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: mobileMenuOpen ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="#"
                  className="hero text-4xl text-white m-auto no-underline"
                  style={{ position: 'relative', fontFamily: 'Merriweather Sans, sans-serif' }}
                >
                  RK
                </a>
              </div>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.sectionId}`}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700/10"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.sectionId)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5356f8] to-[#e34df7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-3 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="text-left">
              <p className="text-fuchsia-400 font-semibold">Hi, my name is</p>
              <h2 className="lg:text-6xl font-bold tracking-tight text-white max-sm:text-4xl md:text-6xl mt-10">
                Robert Kalasky
              </h2>
              <h2 className="mt-4 text-xl font-semibold text-gray-100 sm:text-2xl">I build things for the web.</h2>

              <p className="mt-6 text-lg max-w-lg leading-8 text-gray-200">
                I'm a developer with a passion for creating applications for communities and working with APIs to create
                innovative applications.
              </p>
              <div className="mt-10 gap-x-6">
                <a
                  href={resume}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check out my Resume!
                </a>
              </div>
            </div>
            <img
              src={greeting}
              alt="Product screenshot"
              className="w-[48rem] lg:max-w-full xl:max-w-2xl rounded-xl shadow-xl sm:w-[57rem]"
            />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <h2
            className="max-sm:mt-24 mt-56 font-semibold text-gray-100 sm:text-2xl text-center"
            style={{ fontSize: '5rem', marginBottom: '2.5rem' }}
            id="contact"
          >
            Get In Touch
          </h2>
          <p className="mt-6 text-lg max-w-lg leading-8 text-gray-200 text-center m-auto">
            I am currently available for full-time, part-time, freelance, and internship opportunities. My preferred method of
            communication is email, and I typically respond within 24 hours.
          </p>
          <div className="mt-10 m-auto text-center">
            <a
              onClick={() => window.open('mailto:kalaskyr@gmail.com')}
              className="rounded-md cursor-pointer bg-indigo-600 px-7 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
