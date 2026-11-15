export default function PhoneHero({ profile }) {
  const t = profile.tagline;
  return (
    <section id="top" className="p-hero">
      <p className="status">
        <span className="pulse" aria-hidden="true"><span /><span /></span>
        {profile.availability.badge}
      </p>
      <p className="label p-model">{profile.model} · {profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="p-tagline">
        Turns <em>{t.italic1}</em>{t.middle}<em>{t.italic2}</em>{t.after}
      </p>
      <div className="p-pair">
        <a className="btn main" href={`mailto:${profile.email}`}>Get in touch →</a>
        <a className="btn ghost" href={profile.resume}>Résumé</a>
      </div>
    </section>
  );
}
