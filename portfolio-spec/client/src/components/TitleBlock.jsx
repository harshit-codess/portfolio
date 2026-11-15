export default function TitleBlock({ profile, facts }) {
  const t = profile.tagline;
  return (
    <section className="sheet">
      <div className="title-row">
        <div className="title-main">
          <p className="label">{profile.model} · {profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="tagline">
            Turns <em>{t.italic1}</em>{t.middle}<em>{t.italic2}</em>{t.after}
          </p>
        </div>
        <div className="title-side">
          <p className="label">Availability</p>
          <p className="status">
            <span className="pulse" aria-hidden="true"><span /><span /></span>
            {profile.availability.badge}
          </p>
          <p className="small">{profile.availability.note}</p>
        </div>
      </div>
      <dl className="cells">
        {facts.map((f) => (
          <div className="cell" key={f.label}>
            <dt className="label">{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
