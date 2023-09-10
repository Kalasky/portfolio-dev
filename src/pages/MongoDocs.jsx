import React from 'react'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import {
  AdjustmentsVerticalIcon,
  Bars3Icon,
  ClockIcon,
  CubeTransparentIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

// assets
import mongoPreview from '../assets/mongo-preview.png'
import mongoSVGanim from '../assets/mongoSVGanim.mp4'
import sidenav from '../assets/sidenav.mp4'
import cms from '../assets/cms.mp4'
import mobile from '../assets/mongo-mobile.mp4'
import loading from '../assets/loading.mp4'

// utils
import { scrollToSection } from '../utils/utils'

// components
import Footer from '../components/Footer'
import { GlowGreenPrimary } from '../components/Buttons'

const navigation = [
  { title: 'Retry Mechanism', id: 'error' },
  { title: 'Timeout Management', id: 'loading' },
  { title: 'Mobile Responsive', id: 'mobile' },
  { title: 'Content Management', id: 'cms' },
  { title: 'Side Navigation', id: 'sidenav' },
  { title: 'SVG Animations', id: 'animation' },
]

const features = [
  {
    name: 'Mobile Responsive',
    description: 'Completely responsive on all devices, ensuring a smooth and consistent experience for all users.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Content Management',
    description:
      'Utilizing Contentful CMS, users can easily create, update, and delete content on the site without having to touch any code.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Side Navigation',
    description:
      'The side navigation menu allows users to easily navigate the site, and is hidden on mobile devices to maximize screen space.',
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: 'SVG Animations',
    description:
      'The site features a number of SVG animations in the hero section, adding a touch of interactivity and delight for users.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Loading and Timeout Management',
    description:
      'Displays a loading spinner during data fetching and informs the user if loading is taking longer than expected.',
    icon: ClockIcon,
  },
]

const MongoDocs = () => {
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
                  key={item.title}
                  href={`#${item.id}`}
                  className="text-sm font-semibold leading-6 text-white no-underline"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.title}
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
                        key={item.title}
                        href={`#${item.id}`}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700/10"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.id)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        </header>
        <div>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0cff18] to-[#28f0c4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-2 max-w-2xl  gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
                <div className="lg:pr-8 lg:pt-4 col-span-1 max-sm:col-span-2">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-lime-400">MERN Website</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      MongoDB: The Developer Data Platform
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white">
                      Stay updated on the latest software releases, libraries, and frameworks with this websites comprehensive
                      release information system. Find quick answers to your questions through the organized and easily layed out
                      documentation. Immerse yourself in the developer community with engaging blog posts, industry insights, and
                      coding best practices.
                    </p>
                  </div>
                  <div className="mt-20">
                    <GlowGreenPrimary
                      onClick={() => window.open('https://documentation-kalasky.vercel.app/', '_blank')}
                      padding={'px-4 py-3'}
                    >
                      View Website
                    </GlowGreenPrimary>
                  </div>
                </div>

                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none col-span-1 max-sm:col-span-2">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <div className="inline font-semibold text-lime-400">
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
              src={mongoPreview}
              alt="Product screenshot"
              className=" lg:max-w-full rounded-xl shadow-xl mt-20 sm:w-2/3 m-auto"
            />
          </div>
          <div className="w-full">
            <h2
              className="lg:mt-40 max-sm:mt-20 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="design"
            >
              Mobile Reponsive
            </h2>
            <video
              className="max-sm:w-5/6 mt-10 m-auto text-center rounded-xl sm:w-2/3 svgHeight"
              autoPlay
              muted
              loop
              playsInline
              style={{ height: '50rem' }}
            >
              <source src={mobile} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-20 sm:mt-24 font-semibold text-gray-100 max-sm:text-3xl p-3 sm:text-6xl text-center"
              id="cms"
            >
              Content Management
            </h2>
            <video
              className="max-sm:w-5/6 mt-10 text-center rounded-xl shadow-xl sm:w-2/3 m-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={cms} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-20 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="sidenav"
            >
              Side Navigation
            </h2>
            <video
              className="max-sm:w-5/6 mt-10 sm:w-2/3 m-auto text-center lg:max-w-full rounded-xl shadow-xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={sidenav} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-20 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="animation"
            >
              SVG Animations
            </h2>
            <video
              className="max-sm:w-5/6 mt-10 sm:w-2/3 m-auto text-center lg:max-w-full rounded-xl svgHeight"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={mongoSVGanim} type="video/mp4" />
            </video>
            <h2
              className="lg:mt-40 max-sm:mt-20 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center"
              id="error"
            >
              Error Handling and Retry Mechanism
            </h2>
            <video
              className="max-sm:w-5/6 mt-10 sm:w-2/3 m-auto text-center lg:max-w-full rounded-xl svgHeight"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={loading} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MongoDocs
