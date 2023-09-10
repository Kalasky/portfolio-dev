import { faSpotify, faReact } from '@fortawesome/free-brands-svg-icons'
import {
  faDroplet,
  faCode,
  faWandMagicSparkles,
  faGear,
  faRobot,
  faArrowsRotate,
  faSpinner,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons'

export const skillCards = [
  {
    id: 1,
    title: 'Languages & Technologies',
    description: 'Experienced with JavaScript, Express, Node.js, MongoDB, and Git.',
    labelIcon: faCode,
    labelIconColor: 'text-red-600',
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Over 4 years of development experience in React, HTML, CSS, Tailwindcss, and Bootstrap.',
    labelIcon: faWandMagicSparkles,
    labelIconColor: 'text-pink-500',
  },
  {
    id: 3,
    title: 'API Development',
    description:
      'Passionate about creating interactive and creative applications. Extensive experience in building and maintaining RESTful APIs: Twitch, Spotify, Discord, and more.',
    labelIcon: faGear,
    labelIconColor: 'text-orange-500',
  },
]

export const projectCards = [
  {
    id: 1,
    title: 'Spotifly',
    description:
      'Bridges the gap between Spotify and Twitch. Running on event subscriptions for instant API responses andd complete playback control.',
    link: 'https://github.com/Kalasky/spotifly#readme',
    github: 'https://github.com/Kalasky/spotifly',
    technologies: ['MongoDB', 'Express.js', 'Twitch API', 'Spotify API', 'Discord API'],
    labelIcon: faSpotify,
    labelIconColor: 'text-lime-400',
    viewLink: '/spotifly',
  },
  {
    id: 3,
    title: 'Kolor',
    description: 'Inspired by a Twitch streamer I saw using the same system but manually. I decided to automate it.',
    link: 'https://www.frosky.org',
    github: 'https://github.com/Kalasky/kolor-refactored',
    technologies: ['MongoDB', 'Node.js', 'Twitch API', 'Discord API'],
    labelIcon: faDroplet,
    labelIconColor: 'text-yellow-400',
    viewLink: '/kolor',
  },
  {
    id: 4,
    title: 'MongoDB',
    description: 'An all in one MongoDB content driven website.',
    link: 'https://documentation-kalasky.vercel.app/',
    github: 'https://github.com/Kalasky/documentation',
    technologies: ['Firebase', 'Express.js', 'React', 'Node.js', 'Tailwind'],
    labelIcon: faLeaf,
    labelIconColor: 'text-green-400',
    viewLink: '/mongodocs',
  },
]

export const tokenCards = [
  {
    id: 1,
    title: 'Auto-Generated Tokens',
    description:
      'Upon every request to the API, the server will check if the user has a valid token. If not, a new token will be generated.',
    labelIcon: faSpinner,
    labelIconColor: 'text-violet-500',
  },
  {
    id: 2,
    title: 'Refresh Token Handling',
    description:
      'If the access token is no longer authorized to make requests and the refresh token fails to generate a new access token, the user will be directed to an authentication page where a new refresh token will be generated.',
    labelIcon: faArrowsRotate,
    labelIconColor: 'text-blue-500',
  },
  {
    id: 3,
    title: 'Automated Token Management',
    description:
      'The system automatically manages token handling, ensuring uninterrupted access to the API by refreshing tokens when necessary and directing users to the authentication page if needed.',
    labelIcon: faRobot,
    labelIconColor: 'text-green-500',
  },
]
