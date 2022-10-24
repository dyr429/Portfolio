import colors from '../data/colors.json';
import { hotjar } from 'react-hotjar';

export const getInitialTheme = (themeConfig) => {
  if (themeConfig.disableSwitch) {
    return themeConfig.defaultTheme;
  }

  if (
    typeof window !== 'undefined' &&
    !(localStorage.getItem('gitprofile-theme') === null) &&
    themeConfig.themes.includes(localStorage.getItem('gitprofile-theme'))
  ) {
    let theme = localStorage.getItem('gitprofile-theme');

    return theme;
  }

  if (themeConfig.respectPrefersColorScheme && !themeConfig.disableSwitch) {
    return typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : themeConfig.defaultTheme;
  }

  return themeConfig.defaultTheme;
};

export const skeleton = ({
  width = null,
  height = null,
  style = {},
  shape = 'rounded-full',
  className = null,
}) => {
  return (
    <div
      className={`bg-base-300 animate-pulse ${shape}${
        className ? ` ${className}` : ''
      }${width ? ` ${width}` : ''}${height ? ` ${height}` : ''}`}
      style={style}
    />
  );
};

export const languageColor = (language) => {
  if (typeof colors[language] !== 'undefined') {
    return colors[language].color;
  } else {
    return 'gray';
  }
};

export const fallbackImage = 'Avatar.jpg'
export const ga = {
  // initialize google analytic
  initialize: (id) => {
    try {
      if (typeof window !== 'undefined') {
        window.gtag('js', new Date());
        window.gtag('config', id);
      }
    } catch (error) {
      console.error(error);
    }
  },
  // log specific events happening
  event: ({ action, params }) => {
    try {
      window?.gtag('event', action, params);
    } catch (error) {
      console.error(error);
    }
  },
};

export const isDarkishTheme = (theme) => {
  return ['dark', 'halloween', 'forest', 'black', 'luxury', 'dracula'].includes(
    theme
  );
};

export const setupHotjar = (hotjarConfig) => {
  if (hotjarConfig?.id) {
    let snippetVersion = hotjarConfig?.snippetVersion || 6;

    hotjar.initialize(hotjarConfig.id, snippetVersion);
  }
};

export const sanitizeConfig = (config) => {
  const customTheme = config?.themeConfig?.customTheme || {
    primary: '#fc055b',
    secondary: '#219aaf',
    accent: '#e8d03a',
    neutral: '#2A2730',
    'base-100': '#E3E3ED',
    '--rounded-box': '3rem',
    '--rounded-btn': '3rem',
  };

  const themes = config?.themeConfig?.themes || [
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
  ];

  return {
    github: {
      username: config?.github?.username || '',
      sortBy: config?.github?.sortBy || 'stars',
      limit: config?.github?.limit || 8,
      exclude: {
        forks: config?.github?.exclude?.forks || false,
        projects: config?.github?.exclude?.projects || [],
      },
    },
    social: {
      linkedin: config?.social?.linkedin,
      twitter: config?.social?.twitter,
      facebook: config?.social?.facebook,
      instagram: config?.social?.instagram,
      dribbble: config?.social?.dribbble,
      behance: config?.social?.behance,
      medium: config?.social?.medium,
      dev: config?.social?.dev,
      website: config?.social?.website,
      phone: config?.social?.phone,
      email: config?.social?.email,
    },
    resume: {
      fileUrl: config?.resume?.fileUrl || '',
    },
    skills: config?.skills || [],
    experiences: config?.experiences || [],
    education: config?.education || [],
    publications: config?.publications || [],
    blog: {
      source: config?.blog?.source,
      username: config?.blog?.username,
      limit: config?.blog?.limit || 5,
    },
    googleAnalytics: {
      id: config?.googleAnalytics?.id,
    },
    hotjar: {
      id: config?.hotjar?.id,
      snippetVersion: config?.hotjar?.snippetVersion || 6,
    },
    themeConfig: {
      defaultTheme: config?.themeConfig?.defaultTheme || themes[0],
      disableSwitch: config?.themeConfig?.disableSwitch || false,
      respectPrefersColorScheme:
        config?.themeConfig?.respectPrefersColorScheme || false,
      hideAvatarRing: config?.themeConfig?.hideAvatarRing || false,
      themes: themes,
      customTheme: customTheme,
    },
  };
};

export const noConfigError = {
  status: 500,
  title: 'No Config is provided.',
  subTitle: 'Pass the required config as prop.',
};

export const tooManyRequestError = (reset) => {
  return {
    status: 429,
    title: 'Too Many Requests.',
    subTitle: (
      <p>
        Oh no, you hit the{' '}
        <a
          href="https://developer.github.com/v3/rate_limit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rate limit.
        </a>
        ! Try again later{` ${reset}`}.
      </p>
    ),
  };
};

export const notFoundError = {
  status: 404,
  title: 'The Github Username is Incorrect.',
  subTitle: (
    <p>
      Please provide correct github username in <code>config</code>.
    </p>
  ),
};

export const genericError = {
  status: 500,
  title: 'Ops!!',
  subTitle: 'Something went wrong.',
};
