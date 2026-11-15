import Logo from "../Logo.jsx";

// Only three things: monogram, email button, light/dark button
export default function PhoneHeader({ profile, onToggleTheme }) {
  return (
    <header className="p-header">
      <a href="#top" aria-label="Home" className="p-home"><Logo /></a>
      <div className="p-icons">
        <a href={`mailto:${profile.email}`} aria-label="Email me" className="p-icon">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
        <button type="button" onClick={onToggleTheme} aria-label="Switch between light and dark theme" className="p-icon">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
