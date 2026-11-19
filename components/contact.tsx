import { copy, profile } from '@/data/content';
import { ContactForm } from './contact-form';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-block"
    >
      <div className="container-page">
        <SectionHeading
          id="contact-heading"
          title={copy.sectionTitles.contact}
          subtitle={profile.contactInvitation}
        />
        <Reveal>
          <div className="card mx-auto max-w-3xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
