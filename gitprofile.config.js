// gitprofile.config.js

const config = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/spike-d-94002392/',
    twitter: '@dyr429',
     // medium: 'arifszn',
    website: 'https://dyr429.github.io',
    email: 'yding5[at]wpi.edu',
  },
  resume: {
    fileUrl: 'Resume_Spike_Ding_2022.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'D3',
    'MySQL',
    'Git',
    'Docker',
    'R'
  ],
  experiences: [
    {
      company: 'Paypal',
      position: 'Software Engineer Intern',
      from: 'May 2022',
      to: 'August 2022',
    },
    {
      company: 'Lantos Technologies',
      position: 'Software Developer Co-op',
      from: 'August 2018',
      to: 'Janurary 2019',
    },
  ],
  publications: [
    {
      Title: 'Worcester Polytechnic Institute',
      Author: 'Ph.D in Computer Science',
      Publisher: '2019',
    },
    ],
  education: [
    {
      institution: 'Worcester Polytechnic Institute',
      degree: 'Ph.D in Computer Science',
      from: '2019',
      to: 'Current',
    },
    {
      institution: 'Northeastern University',
      degree: 'MS in Computer Science',
      from: '2017',
      to: '2019',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
