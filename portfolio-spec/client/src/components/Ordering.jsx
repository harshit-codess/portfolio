import { useState } from "react";

export default function Ordering({ profile, contact }) {
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
    <div className="ordering">
      <div className="ordering-text">
        <p className="headline">Let’s build <em>something good</em>.</p>
        <p className="small">{contact.text}</p>
      </div>
      <div className="buttons">
        <a className="btn main" href={`mailto:${profile.email}`}>{profile.email}</a>
        <button type="button" className="btn ghost filled" onClick={copyEmail}>
          {copied ? "Copied!" : "Copy email"}
        </button>
      </div>
    </div>
  );
}
