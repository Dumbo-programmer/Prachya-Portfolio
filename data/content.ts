/**
 * SINGLE SOURCE OF TRUTH FOR ALL EDITABLE SITE CONTENT.
 *
 * Concrete details from the brief (name, title, GitHub profile, canonical
 * domain) are filled in. Everything else remains a placeholder until Prachya
 * replaces it. Items flagged with `placeholder: true` are invented examples
 * and MUST be replaced with verified numbers before publishing.
 *
 * Components should read from this file only. Adding an item here updates the
 * site without touching component code. Articles are the exception: they live
 * as MDX files in `content/writing/` (added in Stage 3).
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type IconName =
  | 'home'
  | 'briefcase'
  | 'trophy'
  | 'brain'
  | 'folder'
  | 'users'
  | 'pen'
  | 'mic'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'kaggle'
  | 'facebook'
  | 'instagram'
  | 'x'
  | 'mapPin'
  | 'calendar'
  | 'graduationCap'
  | 'clock'
  | 'globe'
  | 'code'
  | 'sparkles'
  | 'award'
  | 'externalLink'
  | 'arrowRight'
  | 'lightbulb'
  | 'database'
  | 'terminal'
  | 'layers'
  | 'chart'
  | 'book'
  | 'target'
  | 'coffee'
  | 'heart';

export interface LinkItem {
  label: string;
  href: string;
  icon?: IconName;
}

export interface Profile {
  name: string;
  shortName: string;
  greeting: string;
  title: string;
  tagline: string;
  metaDescription: string;
  seoKeywords: string[];
  location: string;
  email: string;
  photo: string;
  photoAlt: string;
  photoCaption: string;
  heroBadges: string[];
  highlight: {
    label: string;
    title: string;
    description: string;
    href?: string;
    linkLabel?: string;
  };
  /** Sentence fragments; a fragment with href renders as an inline link. */
  introSegments: Array<{ text: string; href?: string }>;
  bio: string[];
  nameVariants: string[];
  contactInvitation: string;
  footerTagline: string;
}

export interface Stat {
  value: string;
  label: string;
  /** PLACEHOLDER: replace with a verified number before publishing. */
  placeholder?: boolean;
}

export interface AtAGlanceItem {
  icon: IconName;
  label: string;
  value: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  start: string;
  end: string;
  status: string;
  description?: string;
  links?: LinkItem[];
}

export interface ExperienceItem {
  organization: string;
  logo: string;
  role: string;
  tag: string;
  start: string;
  end: string;
  location: string;
  links: LinkItem[];
  /** Simple **bold** markdown is supported. */
  bullets: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  logo?: string;
  href?: string;
  linkLabel?: string;
  date?: string;
  links?: LinkItem[];
}

export interface Achievements {
  featured: Achievement;
  grid: Achievement[];
  compact: Achievement[];
}

export interface SkillItem {
  name: string;
  icon?: IconName;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  skills: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  /** PLACEHOLDER: replace with a verified number before publishing. */
  placeholder?: boolean;
}

export interface Project {
  id: string;
  type: string;
  title: string;
  description: string;
  tech: string[];
  metrics?: ProjectMetric[];
  links: LinkItem[];
  image?: string;
}

export interface LeadershipItem {
  id: string;
  category: string;
  title: string;
  organization: string;
  start: string;
  end: string;
  description: string;
  icon?: IconName;
  href?: string;
}

export interface Talk {
  id: string;
  type: string;
  venue: string;
  title: string;
  description: string;
  date: string;
  href?: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface DecorativeSymbol {
  char: string;
  /** Position as a percentage of the viewport. */
  x: number;
  y: number;
  size: number;
  blur?: boolean;
  delay: number;
  /** Hide on small screens to keep mobile light. */
  mobile?: boolean;
}

export interface DecorativeContent {
  codeLines: string[];
  symbols: DecorativeSymbol[];
}

export interface NavItem {
  label: string;
  target: string;
  icon: IconName;
}

export interface Navigation {
  primary: NavItem[];
  more: NavItem[];
  writingHref: string;
}

/** Structural headings and UI labels. Kept here so components hold no copy. */
export interface SiteCopy {
  sectionTitles: {
    biography: string;
    experience: string;
    achievements: string;
    skills: string;
    projects: string;
    leadership: string;
    writing: string;
    talks: string;
    contact: string;
  };
  labels: {
    atAGlance: string;
    education: string;
    experience: string;
    profiles: string;
    viewProjects: string;
    readBiography: string;
    more: string;
    readMore: string;
    showLess: string;
    moreAchievements: string;
    moreProjects: string;
    duration: string;
    location: string;
  };
  form: {
    name: string;
    email: string;
    subject: string;
    subjectOptional: string;
    message: string;
    send: string;
    sending: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    nameError: string;
    emailError: string;
    subjectError: string;
    messageError: string;
    invalidForm: string;
    serverError: string;
    networkError: string;
    success: string;
    honeypot: string;
  };
  footer: {
    rights: string;
  };
  writing: {
    subtitle: string;
    featuredLabel: string;
    readEssay: string;
    moreFromJournal: string;
    articleSingular: string;
    articlePlural: string;
    exploreAll: string;
    backToWriting: string;
    searchPlaceholder: string;
    allTags: string;
    noArticles: string;
    minuteRead: string;
    share: string;
    copyLink: string;
    copied: string;
    shareOnLinkedIn: string;
    shareOnX: string;
    previous: string;
    next: string;
    by: string;
    published: string;
    tableOfContents: string;
  };
  a11y: {
    openMenu: string;
    closeMenu: string;
    scrollToTop: string;
    switchToLight: string;
    switchToDark: string;
    backToTop: string;
    placeholderValue: string;
    filterByTag: string;
    articleNavigation: string;
  };
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: 'Prachya Biswas',
  shortName: 'PB',
  greeting: "Hello, I'm",
  title: 'ML and AI Engineer',
  tagline: 'Building useful machine learning systems, one experiment at a time.',
  metaDescription:
    'Prachya Biswas is an ML and AI Engineer building practical machine learning systems, open-source projects and competition-ready models. Explore projects, experience, achievements and writing.',
  seoKeywords: [
    'Prachya Biswas',
    'ML Engineer',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'PyTorch',
    'Portfolio',
  ],
  location: 'Dhaka, Bangladesh',
  email: 'hello@example.com', // PLACEHOLDER: replace with real email.
  photo: '/images/photo-placeholder.svg',
  photoAlt: 'Portrait placeholder for Prachya Biswas',
  photoCaption: 'ML and AI Engineer',
  heroBadges: ['Machine Learning', 'Deep Learning', 'Open Source'],
  highlight: {
    label: 'Recent highlight',
    title: 'Competition winner placeholder',
    description: 'Replace this line with a verified, recent achievement.',
    href: '#achievements',
    linkLabel: 'See achievements',
  },
  introSegments: [
    { text: "I'm an ML and AI engineer interested in turning research ideas into working products. My work spans " },
    { text: 'the lab', href: 'https://example.com/lab' },
    { text: ', open-source experiments and competitions with ' },
    { text: 'industry teams', href: 'https://example.com/organization' },
    { text: '. I care about clear experiments, honest metrics and systems people can actually use.' },
  ],
  bio: [
    'I am an ML and AI engineer who enjoys the space between research and production. I like taking a paper, reproducing the idea, and then asking what it takes to make it reliable for real users.',
    'My focus includes deep learning, computer vision and data science workflows. I have worked across competitions, open-source projects and team settings, and I like explaining technical decisions in plain language.',
    'Outside of code, I mentor, write about what I learn and speak at community events. I am always happy to talk about interesting problems, partnerships and teams building thoughtful AI products.',
  ],
  nameVariants: ['Prachya', 'Prachya Biswas', 'P. Biswas'],
  contactInvitation: 'Have a role, a research idea or just a question? I would love to hear from you.',
  footerTagline: 'ML and AI Engineer building systems that learn and help.',
};

/** PLACEHOLDER STATS — replace all values with verified numbers before publishing. */
export const stats: Stat[] = [
  { value: '3+', label: 'Years in ML', placeholder: true },
  { value: '10+', label: 'Projects shipped', placeholder: true },
  { value: '5+', label: 'Competition wins', placeholder: true },
];

export const atAGlance: AtAGlanceItem[] = [
  { icon: 'mapPin', label: 'Based in', value: 'Dhaka, Bangladesh' },
  { icon: 'briefcase', label: 'Focus', value: 'ML and AI Engineering' },
  { icon: 'graduationCap', label: 'Background', value: 'CS and ML fundamentals' },
  { icon: 'code', label: 'Toolbox', value: 'Python, PyTorch, SQL' },
  { icon: 'globe', label: 'Languages', value: 'English, Bengali' },
  { icon: 'coffee', label: 'Currently', value: 'Open to ML roles' },
];

export const education: EducationItem[] = [
  {
    degree: 'BSc in Computer Science and Engineering (placeholder)',
    institution: 'University Name',
    start: '2019',
    end: '2024',
    status: 'Completed',
    description: 'Relevant coursework: machine learning, deep learning, statistics and data structures.',
    links: [{ label: 'University', href: 'https://example.com/university' }],
  },
  {
    degree: 'Machine Learning Specialization (placeholder)',
    institution: 'Online Program',
    start: '2023',
    end: '2023',
    status: 'Certified',
    description: 'Supervised learning, neural networks and practical ML project work.',
  },
];

export const experience: ExperienceItem[] = [
  {
    organization: 'Organization One',
    logo: '/logos/placeholder.svg',
    role: 'Machine Learning Engineer',
    tag: 'AI Product',
    start: '2025-01',
    end: 'present',
    location: 'Dhaka, Bangladesh',
    links: [{ label: 'Website', href: 'https://example.com' }],
    bullets: [
      'Built and shipped an **ML feature** using **PyTorch** and FastAPI, placeholder result **+0**.',
      'Improved inference latency by **0%** (placeholder) with batching and model quantization.',
      'Collaborated with product and data teams to define success metrics and monitor drift.',
    ],
  },
  {
    organization: 'Organization Two',
    logo: '/logos/placeholder.svg',
    role: 'AI Research Intern',
    tag: 'Research',
    start: '2024-06',
    end: '2024-12',
    location: 'Remote',
    links: [{ label: 'Project', href: 'https://example.com/project' }],
    bullets: [
      'Reproduced baseline results for a **computer vision** paper and documented findings.',
      'Trained and evaluated **3 placeholder** model variants on a curated dataset.',
    ],
  },
  {
    organization: 'Independent',
    logo: '/logos/placeholder.svg',
    role: 'ML Engineer and Competitor',
    tag: 'Competitions',
    start: '2022-01',
    end: '2024-05',
    location: 'Dhaka, Bangladesh',
    links: [{ label: 'Kaggle', href: 'https://www.kaggle.com/' }],
    bullets: [
      'Participated in **machine learning competitions** and maintained public notebooks.',
      'Built reproducible pipelines with **scikit-learn**, pandas and experiment tracking.',
    ],
  },
];

export const achievements: Achievements = {
  featured: {
    id: 'featured-placeholder',
    title: 'Featured achievement placeholder',
    description: 'Replace with the single achievement that best supports an ML Engineer application. Include a verified result and a link.',
    icon: 'trophy',
    href: 'https://example.com/achievement',
    linkLabel: 'View details',
    date: '2026',
  },
  grid: [
    { id: 'a1', title: 'Competition result', description: 'Placeholder description of a verified competition result. Explain the problem, your approach and the outcome in two or three lines.', icon: 'award', href: 'https://example.com/a1', linkLabel: 'Read more' },
    { id: 'a2', title: 'Research recognition', description: 'Placeholder description of a paper, poster or research acknowledgement. Add the venue and your contribution.', icon: 'book', href: 'https://example.com/a2', linkLabel: 'Read more' },
    { id: 'a3', title: 'Open-source milestone', description: 'Placeholder description of an open-source milestone such as stars, contributors or adoption. Replace with real numbers.', icon: 'github', href: 'https://example.com/a3', linkLabel: 'Read more' },
    { id: 'a4', title: 'Hackathon placement', description: 'Placeholder description of a hackathon placement. Name the event, the team size and what you built.', icon: 'sparkles', href: 'https://example.com/a4', linkLabel: 'Read more' },
    { id: 'a5', title: 'Talk or workshop', description: 'Placeholder description of a community talk or workshop, including the audience size and topic.', icon: 'mic', href: 'https://example.com/a5', linkLabel: 'Read more' },
    { id: 'a6', title: 'Scholarship or grant', description: 'Placeholder description of a scholarship, grant or fellowship. Add the selecting organization and year.', icon: 'graduationCap', href: 'https://example.com/a6', linkLabel: 'Read more' },
  ],
  compact: [
    { id: 'c1', title: 'Competition finalist', description: 'Short verified line about the event.', icon: 'target', href: 'https://example.com/c1' },
    { id: 'c2', title: 'Community contributor', description: 'Short verified line about the contribution.', icon: 'users', href: 'https://example.com/c2' },
    { id: 'c3', title: 'Top project award', description: 'Short verified line about the project.', icon: 'trophy', href: 'https://example.com/c3' },
    { id: 'c4', title: 'Volunteer mentor', description: 'Short verified line about the program.', icon: 'lightbulb', href: 'https://example.com/c4' },
    { id: 'c5', title: 'Paper reviewer', description: 'Short verified line about the venue.', icon: 'book', href: 'https://example.com/c5' },
    { id: 'c6', title: 'Dataset release', description: 'Short verified line about the dataset.', icon: 'database', href: 'https://example.com/c6' },
  ],
};

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python', icon: 'code' },
      { name: 'SQL', icon: 'database' },
      { name: 'TypeScript', icon: 'code' },
      { name: 'Bash', icon: 'terminal' },
    ],
  },
  {
    title: 'ML and Deep Learning',
    icon: 'brain',
    skills: [
      { name: 'PyTorch', icon: 'brain' },
      { name: 'TensorFlow', icon: 'brain' },
      { name: 'scikit-learn', icon: 'brain' },
      { name: 'Transformers', icon: 'sparkles' },
    ],
  },
  {
    title: 'Data Science',
    icon: 'chart',
    skills: [
      { name: 'pandas', icon: 'chart' },
      { name: 'NumPy', icon: 'chart' },
      { name: 'Matplotlib', icon: 'chart' },
      { name: 'Statistics', icon: 'chart' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'MongoDB', icon: 'database' },
      { name: 'Redis', icon: 'database' },
      { name: 'DuckDB', icon: 'database' },
    ],
  },
  {
    title: 'Tools and DevOps',
    icon: 'terminal',
    skills: [
      { name: 'Git', icon: 'code' },
      { name: 'Docker', icon: 'layers' },
      { name: 'FastAPI', icon: 'terminal' },
      { name: 'GitHub Actions', icon: 'terminal' },
    ],
  },
  {
    title: 'Others',
    icon: 'layers',
    skills: [
      { name: 'Hugging Face', icon: 'sparkles' },
      { name: 'Weights and Biases', icon: 'chart' },
      { name: 'Figma', icon: 'layers' },
      { name: 'Technical Writing', icon: 'pen' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'p1',
    type: 'Research',
    title: 'Research project placeholder',
    description: 'Two or three lines describing the research question, the method and the verified result. Replace this placeholder with real work.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    metrics: [{ label: 'Accuracy', value: '0%', placeholder: true }],
    links: [{ label: 'Paper', href: 'https://example.com/paper' }, { label: 'Repository', href: 'https://github.com/' }],
  },
  {
    id: 'p2',
    type: 'AI Product',
    title: 'AI product placeholder',
    description: 'Describe the product, the users it serves and the ML approach. Keep the wording concrete and replace all placeholders.',
    tech: ['FastAPI', 'scikit-learn', 'Next.js'],
    metrics: [{ label: 'Users', value: '0', placeholder: true }],
    links: [{ label: 'Repository', href: 'https://github.com/' }, { label: 'Demo', href: 'https://example.com/demo' }],
  },
  {
    id: 'p3',
    type: 'Open Source',
    title: 'Open-source library placeholder',
    description: 'Explain the problem the library solves, its main API and how people use it. Add real adoption numbers when available.',
    tech: ['Python', 'pytest', 'GitHub Actions'],
    metrics: [{ label: 'Stars', value: '0', placeholder: true }],
    links: [{ label: 'Repository', href: 'https://github.com/' }],
  },
  {
    id: 'p4',
    type: 'Competition',
    title: 'Competition solution placeholder',
    description: 'Summarize the competition task, your feature engineering and modelling strategy, and the verified public or private score.',
    tech: ['Python', 'LightGBM', 'pandas'],
    metrics: [{ label: 'Rank', value: '—', placeholder: true }],
    links: [{ label: 'Write-up', href: 'https://example.com/writeup' }],
  },
  {
    id: 'p5',
    type: 'Research',
    title: 'Computer vision experiment placeholder',
    description: 'Describe the dataset, architecture and evaluation protocol. Replace with a verified project from your portfolio.',
    tech: ['PyTorch', 'OpenCV', 'MATLAB'],
    metrics: [{ label: 'mAP', value: '0.00', placeholder: true }],
    links: [{ label: 'Repository', href: 'https://github.com/' }],
  },
  {
    id: 'p6',
    type: 'AI Product',
    title: 'NLP application placeholder',
    description: 'Describe the language task, the model choices and how the result was evaluated with real users or data.',
    tech: ['Hugging Face', 'Python', 'Streamlit'],
    links: [{ label: 'Demo', href: 'https://example.com/demo' }],
  },
];

export const leadership: LeadershipItem[] = [
  { id: 'l1', category: 'Leadership', title: 'Team lead placeholder', organization: 'Student or professional organization', start: '2025', end: 'present', description: 'Describe the team size, your responsibilities and a concrete outcome.', icon: 'users', href: 'https://example.com/l1' },
  { id: 'l2', category: 'Teaching and Mentorship', title: 'ML mentor placeholder', organization: 'Community program', start: '2024', end: '2025', description: 'Describe who you mentored, the format and what the mentees achieved.', icon: 'lightbulb', href: 'https://example.com/l2' },
  { id: 'l3', category: 'Community', title: 'Study group organizer placeholder', organization: 'Local ML community', start: '2023', end: '2024', description: 'Describe the sessions you organized and the number of participants.', icon: 'globe', href: 'https://example.com/l3' },
  { id: 'l4', category: 'Volunteering', title: 'Workshop volunteer placeholder', organization: 'Non-profit or university', start: '2023', end: '2023', description: 'Describe the workshop, your role and the impact.', icon: 'heart', href: 'https://example.com/l4' },
];

export const talks: Talk[] = [
  { id: 't1', type: 'Talk', venue: 'Conference placeholder', title: 'Practical model evaluation', description: 'A short line about the talk topic and audience.', date: '2026', href: 'https://example.com/t1' },
  { id: 't2', type: 'Workshop', venue: 'University placeholder', title: 'Intro to PyTorch', description: 'A short line about the workshop format and participants.', date: '2025', href: 'https://example.com/t2' },
  { id: 't3', type: 'Feature', venue: 'Publication placeholder', title: 'Building ML products', description: 'A short line about the interview or feature.', date: '2025', href: 'https://example.com/t3' },
  { id: 't4', type: 'Video', venue: 'YouTube placeholder', title: 'Competition walkthrough', description: 'A short line about the video and what it covers.', date: '2024', href: 'https://example.com/t4' },
  { id: 't5', type: 'Talk', venue: 'Meetup placeholder', title: 'From notebook to API', description: 'A short line about the talk topic and audience.', date: '2024', href: 'https://example.com/t5' },
  { id: 't6', type: 'Feature', venue: 'Community site placeholder', title: 'Open-source spotlight', description: 'A short line about the feature and the project.', date: '2023', href: 'https://example.com/t6' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/prachyabiswas', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Kaggle', href: 'https://www.kaggle.com/', icon: 'kaggle' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
];

/** Structural UI labels live here too, so the navbar needs no code edits to relabel. */
export const navigation: Navigation = {
  primary: [
    { label: 'Home', target: 'home', icon: 'home' },
    { label: 'Experience', target: 'experience', icon: 'briefcase' },
    { label: 'Achievements', target: 'achievements', icon: 'trophy' },
    { label: 'Skills', target: 'skills', icon: 'brain' },
    { label: 'Projects', target: 'projects', icon: 'folder' },
  ],
  more: [
    { label: 'About', target: 'about', icon: 'book' },
    { label: 'Leadership and Mentorship', target: 'leadership', icon: 'users' },
    { label: 'Writing', target: 'writing', icon: 'pen' },
    { label: 'Talks and Features', target: 'talks', icon: 'mic' },
    { label: 'Contact', target: 'contact', icon: 'mail' },
  ],
  writingHref: '/writing',
};

export const copy: SiteCopy = {
  sectionTitles: {
    biography: 'Biography',
    experience: 'Experience',
    achievements: 'Achievements',
    skills: 'Skills',
    projects: 'Projects',
    leadership: 'Leadership and Mentorship',
    writing: 'Writing',
    talks: 'Talks and Features',
    contact: 'Get in Touch',
  },
  labels: {
    atAGlance: 'At a Glance',
    education: 'Education',
    experience: 'Experience',
    profiles: 'Profiles',
    viewProjects: 'View Projects',
    readBiography: 'Read biography',
    more: 'More',
    readMore: 'Read more',
    showLess: 'Show less',
    moreAchievements: 'More achievements',
    moreProjects: 'More Projects on GitHub',
    duration: 'Duration',
    location: 'Location',
  },
  form: {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    subjectOptional: '(optional)',
    message: 'Message',
    send: 'Send message',
    sending: 'Sending...',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    subjectPlaceholder: 'What is this about?',
    messagePlaceholder: 'Tell me a little about your idea, role or question...',
    nameError: 'Please enter a name between 2 and 80 characters.',
    emailError: 'Please enter a valid email address.',
    subjectError: 'Subject must be 150 characters or fewer.',
    messageError: 'Message must be between 10 and 2000 characters.',
    invalidForm: 'Please fix the highlighted fields and try again.',
    serverError: 'Something went wrong. Please try again later.',
    networkError: 'Network error. Please check your connection and try again.',
    success: 'Thanks! Your message was sent successfully.',
    honeypot: 'Company',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  writing: {
    subtitle: 'Notes on machine learning, experiments and the things I learn along the way.',
    featuredLabel: 'Featured essay',
    readEssay: 'Read the essay',
    moreFromJournal: 'More from the journal',
    articleSingular: 'article',
    articlePlural: 'articles',
    exploreAll: 'Explore all writing',
    backToWriting: 'Back to Writing',
    searchPlaceholder: 'Search articles...',
    allTags: 'All',
    noArticles: 'No articles match your filters.',
    minuteRead: 'min read',
    share: 'Share this article',
    copyLink: 'Copy link',
    copied: 'Copied!',
    shareOnLinkedIn: 'Share on LinkedIn',
    shareOnX: 'Share on X',
    previous: 'Previous',
    next: 'Next',
    by: 'By',
    published: 'Published',
    tableOfContents: 'On this page',
  },
  a11y: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    scrollToTop: 'Scroll to top',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    backToTop: 'back to top',
    placeholderValue: 'Placeholder value',
    filterByTag: 'Filter by tag',
    articleNavigation: 'Article navigation',
  },
};

/** Decorative-only strings. Rendered with aria-hidden and data-nosnippet. */
export const decorative: DecorativeContent = {
  codeLines: [
    'import torch',
    'from torch import nn',
    'model = ResNet(blocks=4)',
    'loss = criterion(logits, y)',
    'loss.backward()',
    'optimizer.step()',
    'model.fit(X_train, y_train)',
    'preds = model.predict(X_test)',
    'X = np.array([[...], [...], [...]])',
    'git commit -m "improve baseline"',
    'acc = accuracy_score(y, preds)',
    'with torch.no_grad():',
  ],
  symbols: [
    { char: '{ }', x: 7, y: 18, size: 1.4, delay: 0, mobile: true },
    { char: '< />', x: 78, y: 12, size: 1.2, delay: 1.5, mobile: true },
    { char: '( )', x: 22, y: 72, size: 1.1, delay: 3.2 },
    { char: '[ ]', x: 88, y: 64, size: 1.5, delay: 0.8 },
    { char: '=>', x: 48, y: 22, size: 1.3, delay: 2.6, blur: true },
    { char: '#', x: 63, y: 82, size: 1.8, delay: 4.1, blur: true },
    { char: ';', x: 12, y: 44, size: 1.0, delay: 1.1 },
    { char: '0 1', x: 92, y: 35, size: 1.0, delay: 5.3, mobile: true },
    { char: '∑', x: 35, y: 88, size: 1.7, delay: 2.2, blur: true },
    { char: '∇', x: 70, y: 48, size: 1.4, delay: 3.9 },
    { char: 'λ', x: 5, y: 88, size: 1.6, delay: 0.4 },
    { char: 'θ', x: 82, y: 88, size: 1.3, delay: 4.8, blur: true },
    { char: '∂', x: 44, y: 58, size: 1.2, delay: 1.9 },
    { char: 'σ', x: 28, y: 32, size: 1.5, delay: 5.7, mobile: true },
    { char: 'λθ', x: 56, y: 6, size: 1.0, delay: 2.9, blur: true },
    { char: '01', x: 16, y: 6, size: 1.1, delay: 3.5 },
  ],
};
