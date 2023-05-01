import React from 'react'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { PaintBrushIcon, CodeBracketIcon, UserGroupIcon } from '@heroicons/react/20/solid'

// assets
import kolor from '../assets/kolor.svg'
import kolorsm from '../assets/kolorsm.svg'
import kolormp4 from '../assets/kolor.mp4'
import kolorcreate from '../assets/k.mp4'
import kolorremove from '../assets/koloremove.mp4'

// utils
import { scrollToSection } from '../utils/utils'

// components
import Footer from '../components/Footer'

const navigation = [
  { name: 'Complete Integration', sectionId: 'integration' },
  { name: 'Create Tiers', sectionId: 'create' },
  { name: 'Remove Tiers', sectionId: 'remove' },
]

const features = [
  {
    name: 'Multi-Streamer Support.',
    description:
      'Designed to effortlessly support numerous streamers simultaneously, ensuring seamless functionality without any hiccups.',
    icon: UserGroupIcon,
  },
  {
    name: 'Wide Range of Technologies.',
    description:
      'Built on a robust foundation of modern technologies, including Node.js, JavaScript, Twitch API, Discord API, various color APIs, and chatbot libraries such as tmi.js for Twitch and Discord.js for Discord',
    icon: CodeBracketIcon,
  },
  {
    name: 'Automatic Color Naming.',
    description:
      'When a color role is created by an admin, the integrated color API automatically assigns the closest color name based on the hex color value. This feature is made possible by referencing a predefined list of hundreds of colors.',
    icon: PaintBrushIcon,
  },
]

const Kolor = () => {
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
  const [imageSource, setImageSource] = useState(kolor)

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
      setImageSource(kolorsm)
    } else if (windowWidth < 768) {
      // breakpoint for medium devices
      setImageSource(kolorsm)
    } else {
      setImageSource(kolor)
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
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#01ffff] to-[#ea07ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
                  <h2 className="text-base font-semibold leading-7 text-fuchsia-500">API Project</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">kolor</p>
                  <p className="mt-6 text-lg leading-8 text-white max-sm:text-sm">
                    A color tier system designed to bridge the gap between Twitch and Discord for streamer communities. With
                    seamless integration, kolor bot enables users to redeem channel rewards on Twitch, which are automatically
                    added to their Discord accounts. Based on the color tier a user has in the Discord server, it will represent
                    their dedication and support to the streamer. In return, incentivizes users to support the streamer.
                  </p>
                  <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <div className="inline font-semibold text-fuchsia-500">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-white" aria-hidden="true" />
                          {feature.name}
                        </div>
                        <div className="inline"> {feature.description}</div>
                      </div>
                    ))}
                  </div>
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
              id="integration"
            >
              Discord and Twitch Integration
            </h2>
            <video
              className="mt-24 w-[48rem] m-auto text-center lg:max-w-full rounded-xl shadow-xl sm:w-[57rem]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={kolormp4} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-24 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="create"
            >
              Easily Create Color Tiers
            </h2>
            <video className="mt-24 m-auto text-center rounded-xl shadow-xl sm:w-[46rem]" autoPlay muted loop playsInline>
              <source src={kolorcreate} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-24 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="remove"
            >
              Easily Remove Color Tiers
            </h2>
            <video className="mt-24 m-auto text-center rounded-xl shadow-xl sm:w-[46rem]" autoPlay muted loop playsInline>
              <source src={kolorremove} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Kolor
