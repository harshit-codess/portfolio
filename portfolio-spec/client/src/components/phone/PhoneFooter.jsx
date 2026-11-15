export default function PhoneFooter({ socials }) {
  return (
    <footer className="p-footer">
      <p className="socials">
        {socials.map((s) => (
          <a key={s.name} href={s.url}>{s.name} ↗</a>
        ))}
      </p>
      <p className="p-copy">© 2026 Harshit · Sheet 1 of 1</p>
    </footer>
  );
}
