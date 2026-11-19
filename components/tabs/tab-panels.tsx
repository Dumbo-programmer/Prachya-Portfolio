'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { DEFAULT_TAB, isTabId, TAB_EVENT } from '@/lib/tabs';

const ActiveTabContext = createContext<string>(DEFAULT_TAB);

export function TabPanels({
  initialTab,
  children,
}: {
  initialTab: string;
  children: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.dispatchEvent(
      new CustomEvent<string>(TAB_EVENT, { detail: initialTab }),
    );
  }, [initialTab]);

  useEffect(() => {
    const onTabChange = (event: Event) => {
      setActiveTab((event as CustomEvent<string>).detail);
    };

    const onPopState = () => {
      const tab = new URLSearchParams(window.location.search).get('tab');
      setActiveTab(isTabId(tab) ? tab : DEFAULT_TAB);
    };

    window.addEventListener(TAB_EVENT, onTabChange);
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener(TAB_EVENT, onTabChange);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return (
    <ActiveTabContext.Provider value={activeTab}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export function TabPanel({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const activeTab = useContext(ActiveTabContext);
  const isActive = activeTab === id;

  return (
    <section
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      hidden={!isActive}
    >
      {children}
    </section>
  );
}
