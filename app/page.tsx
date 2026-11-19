import type { Metadata } from 'next';
import { About } from '@/components/about';
import { AchievementsSection } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { ExperienceSection } from '@/components/experience';
import { Hero } from '@/components/hero';
import { LeadershipSection } from '@/components/leadership';
import { ProjectsSection } from '@/components/projects';
import { SkillsSection } from '@/components/skills';
import { TalksSection } from '@/components/talks';
import { TabPanel, TabPanels } from '@/components/tabs/tab-panels';
import { WritingSection } from '@/components/writing/writing-section';
import { profile } from '@/data/content';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
import { DEFAULT_TAB, isTabId } from '@/lib/tabs';

export const metadata: Metadata = {
  title: `${siteName} | ${profile.title}`,
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: `${siteName} | ${profile.title}`,
    description: siteDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | ${profile.title}`,
    description: siteDescription,
    images: ['/opengraph-image'],
  },
};

interface HomePageProps {
  searchParams: Promise<{ tab?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { tab } = await searchParams;
  const initialTab = isTabId(tab) ? tab : DEFAULT_TAB;

  return (
    <TabPanels initialTab={initialTab}>
      <TabPanel id="home">
        <Hero />
      </TabPanel>

      <TabPanel id="about">
        <About />
      </TabPanel>

      <TabPanel id="experience">
        <ExperienceSection />
      </TabPanel>

      <TabPanel id="achievements">
        <AchievementsSection />
      </TabPanel>

      <TabPanel id="skills">
        <SkillsSection />
      </TabPanel>

      <TabPanel id="projects">
        <ProjectsSection />
      </TabPanel>

      <TabPanel id="leadership">
        <LeadershipSection />
      </TabPanel>

      <TabPanel id="writing">
        <WritingSection />
      </TabPanel>

      <TabPanel id="talks">
        <TalksSection />
      </TabPanel>

      <TabPanel id="contact">
        <Contact />
      </TabPanel>
    </TabPanels>
  );
}
