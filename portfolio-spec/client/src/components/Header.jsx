import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ profile, theme, onToggleTheme }) {
  return (
    <header className="header">
      <a href="/" className="brand" aria-label="Home">
        <Logo />
        <span>
          {profile.name}
          <span className="brand-sub">{profile.sheet}</span>
        </span>
      </a>
      <div className="actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a className="btn ghost" href={profile.resume}>Download PDF</a>
        <a className="btn main" href="#order">Hire me</a>
      </div>
    </header>
  );
}
