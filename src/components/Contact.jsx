import React from "react";
import ContactForm from "./ContactForm";
import PromptHeading from "./PromptHeading";
import Reveal from "./Reveal";
import { useContent } from "../contexts/ContentContext";

const Contact = () => {
  const { contactSettings: contact, social } = useContent();
  return (
    <Reveal as="section" id="contact" className="max-w-2xl mx-auto px-6 py-10">
      <PromptHeading cmd={contact.heading} branch="last" />
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        {contact.description}
      </p>
      <p className="mb-8 text-[var(--text-secondary)] font-['JetBrains_Mono'] text-sm">
        {social.links.map((link, i) => (
          <React.Fragment key={link.label}>
            {i > 0 && <span className="text-[var(--text-muted)]"> · </span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:opacity-70 underline underline-offset-4"
            >
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </p>

      <ContactForm />
    </Reveal>
  );
};

export default Contact;
