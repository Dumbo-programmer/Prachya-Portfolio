/**
 * SINGLE SOURCE OF TRUTH FOR ALL EDITABLE SITE CONTENT.
 *
 * Text in [square brackets] is still missing from Prachya. Keep the slot and
 * render it visibly; replace the value when the real content arrives. Do not
 * invent numbers, awards or links that are not in the content doc.
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
  | 'heart'
  | 'python'
  | 'pytorch'
  | 'tensorflow'
  | 'numpy'
  | 'git'
  | 'googlecolab'
  | 'langchain';

export interface LinkItem {
  label: string;
  href: string;
  icon?: IconName;
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  metaDescription: string;
  seoKeywords: string[];
  location: string;
  email: string;
  emailHref: string;
  /** Theme-specific portraits; the hero shows one at a time. */
  photoLight: string;
  photoDark: string;
  photoAlt: string;
  photoCaption: string;
  heroBadges: string[];
  bio: string[];
  contactInvitation: string;
  footerTagline: string;
}

export interface ExperienceItem {
  organization: string;
  logo?: string;
  role: string;
  period: string;
  description: string;
  links?: LinkItem[];
}

export interface AchievementRow {
  id: string;
  title: string;
  year: string;
  detail: string;
}

export interface Achievements {
  awards: AchievementRow[];
  competitions: AchievementRow[];
}

export interface SkillItem {
  name: string;
  icon?: IconName;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  /** 1, 2 or 3 — the desktop column this card belongs to. */
  column: 1 | 2 | 3;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: LinkItem[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface SeminarLink {
  label: string;
  /** Missing links stay visible as disabled placeholders. */
  href?: string;
}

export interface Seminar {
  id: string;
  title: string;
  host: string;
  date: string;
  topic: string;
  description: string;
  photos: string[];
  links: SeminarLink[];
}

export interface Book {
  id: string;
  cover: string;
  title: string;
  author: string;
  topic: string;
  status: string;
  noteHref?: string;
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
  href: string;
  icon: IconName;
  /** Route prefixes that should also mark this item active. */
  activeOn?: string[];
  /** Home-page section to highlight, when the link itself is a route. */
  activeSection?: string;
}

export interface Navigation {
  primary: NavItem[];
  more: NavItem[];
}

/** Structural headings and UI labels. Kept here so components hold no copy. */
export interface SiteCopy {
  sectionTitles: {
    experience: string;
    achievements: string;
    skills: string;
    projects: string;
    leadership: string;
    writing: string;
    notes: string;
    talks: string;
    blog: string;
    contact: string;
  };
  labels: {
    viewProjects: string;
    contactMe: string;
    more: string;
    readMore: string;
    moreProjects: string;
  };
  achievements: {
    awardsTitle: string;
    competitionsTitle: string;
    achievement: string;
    year: string;
    detail: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    nameError: string;
    emailError: string;
    messageError: string;
    invalidForm: string;
    serverError: string;
    networkError: string;
    success: string;
    honeypot: string;
  };
  footer: {
    line: string;
  };
  writing: {
    subtitle: string;
    featuredLabel: string;
    sampleLabel: string;
    readEssay: string;
    moreFromJournal: string;
    articleSingular: string;
    articlePlural: string;
    exploreAll: string;
    backToWriting: string;
    searchPlaceholder: string;
    allTags: string;
    noArticles: string;
    moreComing: string;
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
  notes: {
    subtitle: string;
    notesTitle: string;
    allGroups: string;
    noNotes: string;
    backToNotes: string;
    viewRepo: string;
    sampleLabel: string;
    booksTitle: string;
    booksSubtitle: string;
    booksEmpty: string;
  };
  talks: {
    intro: string;
    viewAll: string;
    eventPost: string;
    video: string;
    facebookPost: string;
    photos: string;
    noTalks: string;
  };
  blog: {
    subtitle: string;
    allCategories: string;
    noPosts: string;
    backToBlog: string;
    viewAllPosts: string;
    sampleLabel: string;
    photos: string;
  };
  a11y: {
    openMenu: string;
    closeMenu: string;
    scrollToTop: string;
    switchToLight: string;
    switchToDark: string;
    placeholderValue: string;
    filterByTag: string;
    filterByGroup: string;
    filterByCategory: string;
    articleNavigation: string;
    noteNavigation: string;
    blogNavigation: string;
    talkNavigation: string;
  };
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: 'Prachya Biswas',
  shortName: 'PB',
  title: 'Computer Science student at BRAC University, Dhaka',
  tagline: 'Machine Learning • Data Science • Mathematics • Teaching',
  metaDescription:
    'Prachya Biswas is a Computer Science student at BRAC University, Dhaka, working on machine learning and data science and serving as an academic team member at the Bangladesh Mathematical Olympiad.',
  seoKeywords: [
    'Prachya Biswas',
    'Machine Learning',
    'Data Science',
    'Mathematics',
    'Teaching',
    'BRAC University',
    'Portfolio',
  ],
  location: 'Dhaka, Bangladesh',
  email: '[email]',
  emailHref: 'mailto:[email]',
  photoLight: '/images/prachya_light.jpg',
  photoDark: '/images/prachya_dark.jpg',
  photoAlt: 'Portrait of Prachya Biswas',
  photoCaption: 'Prachya Biswas',
  heroBadges: ['Machine Learning', 'Data Science', 'Mathematics', 'Teaching'],
  bio: [
    'Hello! I am a Computer Science student at BRAC University in Dhaka and Research Secretary at the ML & AI Research Lab, Bangladesh. I work as a data scientist on projects like MediSense BD, a national health forecasting platform, and Vangari AI, a waste classification project.',
    'I am also an academic team member at the Bangladesh Mathematical Olympiad and teach mathematics to students through study materials, prep classes and seminars at CUET and Chittagong University.',
  ],
  contactInvitation:
    'Have a project, a research idea or a question about math olympiads? Send me a message.',
  footerTagline: 'Machine Learning • Data Science • Mathematics • Teaching',
};

export const experience: ExperienceItem[] = [
  {
    organization: 'ML & AI Research Lab, Bangladesh',
    logo: '/logos/placeholder.svg',
    role: 'Research Secretary',
    period: '[period]',
    description:
      'Secretary of a research lab for machine learning and AI in Bangladesh.',
  },
  {
    organization: 'Bangladesh Mathematical Olympiad',
    logo: '/logos/placeholder.svg',
    role: 'Academic Team Member',
    period: '[period]',
    description: 'Academic team member at the national math olympiad.',
  },
  {
    organization: 'MediSense BD',
    logo: '/logos/placeholder.svg',
    role: 'Data Scientist',
    period: '[period]',
    description:
      'Implemented the TRACE model for a national health and epidemic forecasting platform.',
  },
  {
    organization: 'Vangari AI (IDSOL 2026)',
    logo: '/logos/placeholder.svg',
    role: 'Data Scientist',
    period: '2026',
    description:
      'Data science side of a waste classification project, compared ViT-Small and EfficientNet-B0 for the image classifier.',
  },
  {
    organization: 'IEEE BRAC University Student Branch',
    logo: '/logos/placeholder.svg',
    role: 'Secretariat',
    period: '[period]',
    description: 'Part of the branch secretariat.',
  },
  {
    organization:
      'BRAC University Entrepreneurship Development Forum (BUEDF)',
    logo: '/logos/placeholder.svg',
    role: 'Sub-Executive, Human Resources',
    period: '[period]',
    description: '[one line from Prachya]',
  },
];

export const achievements: Achievements = {
  awards: [
    {
      id: 'bdmo-champion',
      title: 'Champion, Bangladesh Mathematical Olympiad (BdMO)',
      year: '[year, category]',
      detail: 'National champion.',
    },
    {
      id: 'blockchain-ai-finalist',
      title: 'Finalist, Bangladesh Blockchain and AI Olympiad',
      year: '[year]',
      detail: 'AI category.',
    },
  ],
  competitions: [
    {
      id: 'idsol-2026',
      title: 'IDSOL (International Data Science Olympiad)',
      year: '2026',
      detail: 'Presented Vangari AI; data science side of the team.',
    },
    {
      id: 'imlo-2026',
      title: 'International Machine Learning Olympiad (IMLO)',
      year: '2026',
      detail: 'Team of 3.',
    },
    {
      id: 'nasa-space-apps-2026',
      title: 'NASA Space Apps Challenge, Dhaka',
      year: '2026',
      detail: 'Data Science Lead, team Agnishikha, project AstraFlame.',
    },
  ],
};

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'code',
    column: 1,
    skills: [{ name: 'Python', icon: 'python' }],
  },
  {
    title: 'Machine Learning',
    icon: 'brain',
    column: 1,
    skills: [
      { name: 'Linear Regression' },
      { name: 'Logistic Regression' },
      { name: 'KNN' },
      { name: 'SVM' },
      { name: 'Neural Networks' },
      { name: 'Time Series Analysis' },
    ],
  },
  {
    title: 'Data Science',
    icon: 'chart',
    column: 1,
    skills: [
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Data Pipelines' },
      { name: 'Model Evaluation' },
    ],
  },
  {
    title: 'AI',
    icon: 'sparkles',
    column: 2,
    skills: [
      { name: 'RAG Pipelines' },
      { name: 'AI Agents' },
      { name: 'Agentic AI' },
      { name: 'LangChain', icon: 'langchain' },
    ],
  },
  {
    title: 'Deep Learning',
    icon: 'layers',
    column: 2,
    skills: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'timm' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Vision Transformer (ViT)' },
      { name: 'EfficientNet' },
    ],
  },
  {
    title: 'Tools',
    icon: 'terminal',
    column: 3,
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Google Colab', icon: 'googlecolab' },
    ],
  },
  {
    title: 'Mathematics',
    icon: 'target',
    column: 3,
    skills: [
      { name: 'Olympiad Problem Solving' },
      { name: 'Teaching' },
    ],
  },
  {
    title: 'Spoken Languages',
    icon: 'globe',
    column: 3,
    skills: [{ name: 'Bangla' }, { name: 'English' }],
  },
];

export const projects: Project[] = [
  {
    id: 'medisense-bd',
    title: 'MediSense BD',
    description:
      'National health and epidemic forecasting platform; Prachya implemented the TRACE forecasting model as data scientist.',
    tech: ['Python', 'time series'],
    links: [],
  },
  {
    id: 'vangari-ai',
    title: 'Vangari AI',
    description:
      'Waste classification project that grew into a full-stack waste marketplace app; classifies waste into organic, recyclable and non-recyclable.',
    tech: ['PyTorch', 'timm', 'ViT-Small', 'EfficientNet-B0'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/prachyabiswas',
        icon: 'github',
      },
    ],
  },
  {
    id: 'astraflame',
    title: 'AstraFlame',
    description:
      'AI dashboard that ranks spacecraft fire risk of materials using NASA combustion data (Saffire and BASS), built for NASA Space Apps Challenge 2026 with team Agnishikha.',
    tech: ['Python', 'machine learning', 'NASA data'],
    links: [],
  },
  {
    id: 'agentic-ai-from-scratch',
    title: 'Agentic-AI-From-Scratch',
    description:
      'Notes and practice code on agentic AI, RAG and LangChain, written so a beginner can follow end to end.',
    tech: ['Python', 'LangChain', 'RAG'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/prachyabiswas',
        icon: 'github',
      },
    ],
  },
  {
    id: 'ml-algorithms-from-scratch',
    title: 'Machine learning algorithms from scratch',
    description:
      'Linear and logistic regression, KNN, SVM and a neural network written in NumPy.',
    tech: ['Python', 'NumPy'],
    links: [],
  },
  {
    id: 'computational-biology-meets-cells',
    title: 'Computational Biology Meets Cells',
    description:
      'Module-by-module notes from self-study of bioinformatics and computational biology course material.',
    tech: ['Bioinformatics', 'Python'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/prachyabiswas',
        icon: 'github',
      },
    ],
  },
];

export const leadership: LeadershipItem[] = [
  {
    id: 'math-olympiad-academic-team',
    title: 'Math olympiad academic team',
    description:
      'Academic team member at the Bangladesh Mathematical Olympiad.',
    icon: 'users',
  },
  {
    id: 'teaching-olympiad-students',
    title: 'Teaching olympiad students',
    description:
      'Prep classes for Prothom Alo Math Olympiad students, from primary to advanced level. The first class was a two-hour lecture on the Pigeonhole Principle.',
    icon: 'lightbulb',
  },
  {
    id: 'study-materials',
    title: 'Study materials',
    description:
      'Worksheets and exam guides for Cambridge O Level Mathematics students.',
    icon: 'book',
  },
  {
    id: 'seminars-and-workshops',
    title: 'Seminars and workshops',
    description:
      'Sessions at CUET and Chittagong University (details under Talks and Features).',
    icon: 'mic',
  },
  {
    id: 'student-communities',
    title: 'Student communities',
    description:
      'Secretariat at IEEE BRAC University Student Branch, Sub-Executive of HR at BUEDF, General Member in R&D at BUCC.',
    icon: 'globe',
  },
];

/** Five seminars are listed in the doc; the main page shows the latest three. */
export const seminars: Seminar[] = [
  {
    id: 'machine-learning-2026-ai-seminar',
    title: 'Machine Learning 2026: Artificial Intelligence seminar',
    host: 'IEEE CUET Student Branch',
    date: '[date]',
    topic: '[topic]',
    description: '[description from Prachya]',
    photos: ['/images/writing-placeholder.svg'],
    links: [{ label: 'Event post' }],
  },
  {
    id: 'seminar-placeholder-2',
    title: '[event name]',
    host: '[host: CUET, CU or IIUC]',
    date: '[date]',
    topic: '[topic]',
    description: '[description from Prachya]',
    photos: ['/images/writing-placeholder.svg'],
    links: [{ label: 'Video' }],
  },
  {
    id: 'seminar-placeholder-3',
    title: '[event name]',
    host: '[host]',
    date: '[date]',
    topic: '[topic]',
    description: '[description from Prachya]',
    photos: ['/images/writing-placeholder.svg'],
    links: [{ label: 'Facebook post' }],
  },
  {
    id: 'seminar-placeholder-4',
    title: '[event name]',
    host: '[host]',
    date: '[date]',
    topic: '[topic]',
    description: '[description from Prachya]',
    photos: ['/images/writing-placeholder.svg'],
    links: [{ label: 'Facebook post' }],
  },
  {
    id: 'seminar-placeholder-5',
    title: '[event name]',
    host: '[host]',
    date: '[date]',
    topic: '[topic]',
    description: '[description from Prachya]',
    photos: ['/images/writing-placeholder.svg'],
    links: [{ label: 'Facebook post' }],
  },
];

export const books: Book[] = [
  {
    id: 'book-placeholder',
    cover: '/images/writing-placeholder.svg',
    title: '[book title]',
    author: '[author]',
    topic: '[ML, AI or Mathematics]',
    status: '[Reading or Finished]',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/prachyabiswas',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/prachya-biswas-06715932a',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:[email]',
    icon: 'mail',
  },
];

/** Navbar order follows the content doc. Writing is filtered by the navbar. */
export const navigation: Navigation = {
  primary: [
    { label: 'Home', href: '/#home', icon: 'home' },
    { label: 'Experience', href: '/#experience', icon: 'briefcase' },
    { label: 'Achievements', href: '/#achievements', icon: 'trophy' },
    { label: 'Skills', href: '/#skills', icon: 'brain' },
    { label: 'Projects', href: '/#projects', icon: 'folder' },
  ],
  more: [
    {
      label: 'Leadership & Mentorship',
      href: '/#leadership',
      icon: 'users',
    },
    {
      label: 'Writing',
      href: '/#writing',
      icon: 'pen',
      activeOn: ['/writing'],
    },
    {
      label: 'Notes and Books',
      href: '/notes',
      icon: 'book',
      activeOn: ['/notes'],
    },
    {
      label: 'Talks and Features',
      href: '/#talks',
      icon: 'mic',
      activeOn: ['/talks'],
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: 'globe',
      activeOn: ['/blog'],
      activeSection: 'blog',
    },
    { label: 'Contact', href: '/#contact', icon: 'mail' },
  ],
};

export const copy: SiteCopy = {
  sectionTitles: {
    experience: 'Experience',
    achievements: 'Achievements',
    skills: 'Skills',
    projects: 'Projects',
    leadership: 'Leadership and Mentorship',
    writing: 'Writing',
    notes: 'Notes and Books',
    talks: 'Talks and Features',
    blog: 'Blog',
    contact: 'Contact Me',
  },
  labels: {
    viewProjects: 'See What I Build',
    contactMe: 'Contact Me',
    more: 'More',
    readMore: 'Read more',
    moreProjects: 'More Projects on GitHub',
  },
  achievements: {
    awardsTitle: 'Awards and recognition',
    competitionsTitle: 'Competitions entered',
    achievement: 'Achievement',
    year: 'Year',
    detail: 'Detail',
  },
  form: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Tell me a little about your idea, role or question...',
    nameError: 'Please enter a name between 2 and 80 characters.',
    emailError: 'Please enter a valid email address.',
    messageError: 'Message must be between 10 and 2000 characters.',
    invalidForm: 'Please fix the highlighted fields and try again.',
    serverError:
      'Something went wrong. Please email me directly at [email].',
    networkError:
      'Something went wrong. Please email me directly at [email].',
    success: 'Thanks, your message is sent. I will reply soon.',
    honeypot: 'Company',
  },
  footer: {
    line: '© 2026 Prachya Biswas. Dhaka, Bangladesh.',
  },
  writing: {
    subtitle:
      'Notes on machine learning, experiments and the things I learn along the way.',
    featuredLabel: 'Featured essay',
    sampleLabel: 'Sample article',
    readEssay: 'Read the essay',
    moreFromJournal: 'More from the journal',
    articleSingular: 'article',
    articlePlural: 'articles',
    exploreAll: 'Explore all writing',
    backToWriting: 'Back to Writing',
    searchPlaceholder: 'Search articles...',
    allTags: 'All',
    noArticles: 'No articles match your filters.',
    moreComing: 'More essays are on the way.',
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
  notes: {
    subtitle:
      'Machine learning, AI and mathematics notes from my own study, plus the books I am reading.',
    notesTitle: 'Notes',
    allGroups: 'All',
    noNotes: 'No notes in this group yet.',
    backToNotes: 'Back to Notes',
    viewRepo: 'View repo',
    sampleLabel: 'Sample note',
    booksTitle: 'Books',
    booksSubtitle:
      'A reading list of machine learning, AI and mathematics books.',
    booksEmpty: 'The reading list is coming soon.',
  },
  talks: {
    intro:
      'I have also conducted seminars and workshops at CUET, CU and IIUC.',
    viewAll: 'View all seminars',
    eventPost: 'Event post',
    video: 'Video',
    facebookPost: 'Facebook post',
    photos: 'Photos',
    noTalks: 'Seminar details are coming soon.',
  },
  blog: {
    subtitle:
      'Photos and moments from university, olympiads, competitions and teaching.',
    allCategories: 'All',
    noPosts: 'No posts in this category yet.',
    backToBlog: 'Back to Blog',
    viewAllPosts: 'View all posts',
    sampleLabel: 'Sample post',
    photos: 'Photos',
  },
  a11y: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    scrollToTop: 'Scroll to top',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    placeholderValue: 'Placeholder value',
    filterByTag: 'Filter by tag',
    filterByGroup: 'Filter notes by group',
    filterByCategory: 'Filter posts by category',
    articleNavigation: 'Article navigation',
    noteNavigation: 'Note navigation',
    blogNavigation: 'Blog navigation',
    talkNavigation: 'Seminar navigation',
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
