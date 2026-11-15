export default function Footer({ footer, socials }) {
  return (
    <footer className="footer">
      <span>{footer.left}</span>
      <span className="socials">
        {socials.map((s) => (
          <a key={s.name} href={s.url}>{s.name} ↗</a>
        ))}
      </span>
    </footer>
  );
}
