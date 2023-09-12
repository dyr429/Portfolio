// gitprofile.config.js

const config = {
  github: {
    username: 'dyr429', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'spike-d-94002392',
    twitter: '@dyr429',
     // medium: 'arifszn',
    website: 'https://dyr429.github.io',
    email: 'yding5[at]wpi.edu',
  },
  resume: {
    fileUrl: 'Resume_2023.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Java',
    'React.js',
    'Node.js',
    'Nest.js',
    'D3',
    'MySQL',
    'Firebase',
    'GraphQL',
    'Docker',
    'R',
    'Swift',
    'ARKit',
    'WebGL'
  ],
  experiences: [
    {
      company: 'Paypal',
      position: 'Software Engineer Intern',
      from: 'May 2023',
      to: 'August 2023',
    },
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
      Title: 'Data in the Wind: Evaluating Multiple-Encoding Design for Particle Motion Visualizations',
      Author: 'Yiren Ding  and Lane Harrison',
      Publisher: 'VIS 2023',
      link:'https://osf.io/4zxt6',
      thumbnail:'wind.png',
      horner: "Hornerable Mention"
    },
    {
      Title: 'reVISit: Supporting Scalable Evaluation of Interactive Visualizations',
      Author: 'Yiren Ding, Jack Wilburn, Hilson Shrestha, Akim Ndlovu, Kiran Gadhave, Carolina Nobre, Alexander lex and Lane Harrison',
      Publisher: 'VIS 2023',
      link:'https://osf.io/preprints/hdzyv/',
      thumbnail:'revisit.png'
    },
    {
      Title: 'The Risks of Ranking: Revisiting Graphical Perception to Model Individual Differences in Visualization Performance',
      Author: 'Russell Davis, Xiaoying Pu, Yiren Ding, Brian D. Hall, Karen Bonilla, Mi Feng, Matthew Kay, and Lane Harrison',
      Publisher: 'IEEE Transactions on Visualization and Computer Graphics (2022)',
      link:'https://ieeexplore.ieee.org/document/9978718',
      thumbnail:'reversing.png'
    },
    {
      Title: 'Visualizing Classroom Dynamics with COILS: the Classroom Observation Interactive Learning System',
      Author: 'Yiren Ding, Manas Mehta, Noëlle Rakotondravony, Andrew McReynolds, Caroline Useda, Tiffany Perry, Jennifer  LoCasale-Crouch, Erin Ottmar, Jacob Whitehill, Lane Harrison',
      Publisher: 'In submission',
      thumbnail:'acorn.png'
    },
    {
      Title: '“Probablement, Wahrscheinlich, Likely?” A Cross-Language Study of How People Verbalize Probabilities in Icon Array Visualizations',
      Author: 'Noëlle Rakotondravony, Yiren Ding, Lane Harrison',
      Publisher: 'IEEE Transactions on Visualization and Computer Graphics (2022).',
      link:'language.pdf',
      thumbnail:'language.png'
    },
    {
      Title: 'VisQuiz: Exploring Feedback Mechanisms to Improve Graphical Perception',
      Author: 'Ryan Birchfield, Maddison Caten, Errica Cheng, Madyson Kelly, Truman Larson, Hoang Phan Pham, Yiren Ding, Noëlle Rakotondravony, Lane Harrison',
      Publisher: 'IEEE VIS 2022, arXiv preprint arXiv:2207.09534.',
      link:'visquiz.pdf',
      thumbnail:'visquiz.png'
    },
    {
      Title: 'Quantifying and Modeling how well Motion Visualizations Communicate Data',
      Author: 'Yiren Ding and Lane Harrison',
      Publisher: 'WPI Graduate Research Innovation Exchange Poster Session (2020)',
      link: 'motionPoster.pdf',
      thumbnail:'motion-thumb.png'
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
