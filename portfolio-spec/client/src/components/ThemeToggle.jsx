export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="btn ghost mono-btn"
      onClick={onToggle}
      aria-label="Switch between light and dark theme"
    >
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 010 18z" fill="currentColor" stroke="none" />
      </svg>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
