import React from 'react'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { MusicalNoteIcon, ServerIcon, LockClosedIcon } from '@heroicons/react/20/solid'

// assets
import spotiflyCode from '../assets/spotiflycode.svg'
import spotiflyCodesm from '../assets/spotifly-code.svg'
import spotiflydocs from '../assets/spotiflydocs.mp4'
import queue from '../assets/queue.mp4'
import playback from '../assets/playback.mp4'

// utils
import { scrollToSection } from '../utils/utils'

// components
import Footer from '../components/Footer'
import { TokenManagement } from '../components/Cards'

const navigation = [
  { name: 'Playback Control', sectionId: 'playback' },
  { name: 'Documentation', sectionId: 'documentation' },
  { name: 'Token Management', sectionId: 'tokens' },
  { name: 'Queue', sectionId: 'queue' },
]

const features = [
  {
    name: 'Seamless Token Handling.',
    description:
      "Stay worry-free with Spotifly's advanced auto token handling system. It intelligently manages tokens and ensures uninterrupted access to the API, automatically refreshing tokens when necessary, and redirecting users to the authentication page when needed. Focus on what matters most while spotifly takes care of the technicalities.",
    icon: LockClosedIcon,
  },
  {
    name: 'Full Playback Control.',
    description:
      'Enhances the viewers experience by giving them complete playback control of your Spotify account. Enabling an interactive and engaging environment where viewers can directly add songs to the queue, control volume, and skip tracks.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Self-Hosted with Documentation.',
    description:
      'Easily set up and self-host your own instance. With clear and concise documentation, guiding you through every step of the process.',
    icon: ServerIcon,
  },
]

const Spotifly = () => {
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [imageSource, setImageSource] = useState(spotiflyCode)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth < 640) {
      // breakpoint for smaller devices
      setImageSource(spotiflyCodesm)
    } else if (windowWidth < 768) {
      // breakpoint for medium devices
      setImageSource(spotiflyCodesm)
    } else {
      setImageSource(spotiflyCode)
    }
  }, [windowWidth])

  return (
    <div>
      <div className="overflow-hidden bg-slate-900 py-24 sm:py-32">
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
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0cff18] to-[#da36e9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-lime-400">API Project</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Spotifly</p>
                  <p className="mt-6 text-lg leading-8 text-white">
                    Spotifly allows viewers to control playback, search tracks, add to queue, see current song, skip songs, and
                    create their own unique playlists. Spotifly brings a new level of interactivity to Twitch streams, making
                    music a shared experience for streamers and viewers.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <div className="inline font-semibold text-lime-400">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-white" aria-hidden="true" />
                          {feature.name}
                        </div>
                        <div className="inline"> {feature.description}</div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src={imageSource}
                alt="Product screenshot"
                className="w-[48rem] lg:max-w-full rounded-xl shadow-xl sm:w-[57rem]"
              />
            </div>
            <h2
              className="lg:mt-40 max-sm:mt-24 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="playback"
            >
              Viewer playback Control
            </h2>
            <video className="mt-24 m-auto text-center rounded-xl shadow-xl sm:w-[46rem]" autoPlay muted loop playsInline>
              <source src={playback} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-24 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="documentation"
            >
              Clear And Concise Documentation
            </h2>
            <video
              className="mt-24 w-[48rem] m-auto text-center lg:max-w-full rounded-xl shadow-xl sm:w-[57rem]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={spotiflydocs} type="video/mp4" />
            </video>
            <TokenManagement />
            <h2
              className="lg:mt-40 max-sm:mt-24 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="queue"
            >
              Queue System In Action
            </h2>
            <video className="mt-24 m-auto text-center rounded-xl shadow-xl sm:w-[46rem]" autoPlay muted loop playsInline>
              <source src={queue} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Spotifly
