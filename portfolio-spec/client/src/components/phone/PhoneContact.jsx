import { useState } from "react";

export default function PhoneContact({ profile, contact }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked: the mailto link still works
    }
  }

  return (
    <section id="order" className="p-contact">
      <p className="p-contact-label">05 · Ordering information</p>
      <p className="p-contact-head">Let’s build <em>something good</em>.</p>
      <p className="p-contact-text">{contact.text}</p>
      <div className="p-contact-buttons">
        <a href={`mailto:${profile.email}`} className="p-solid">{profile.email}</a>
        <button type="button" onClick={copyEmail} className="p-outline">
          {copied ? "Copied!" : "Copy email"}
        </button>
      </div>
    </section>
  );
}
