module.exports = {
  siteTitle: 'Shounak Pawar',
  siteDescription:
    'Shounak Pawar is a Software Engineer based in Pune.',
  siteKeywords:
    'Shounak Pawar, Shounak Pawar, software engineer, backend engineer, developer',
  siteUrl: 'https://shounak.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shounak Pawar S P',
  location: 'Pune, IN',
  email: 'shounakpawar98@gmail.com',
  github: 'https://github.com/shounak98',
  twitterHandle: '@r',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shounak98',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shounak-pawar-a07a8318b/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/excogitatr',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ShounakSP',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
