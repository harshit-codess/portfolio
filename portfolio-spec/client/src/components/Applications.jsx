export default function Applications({ items }) {
  return (
    <div className="cells">
      {items.map((p, i) => (
        <article className="cell app" key={p.name}>
          <div className="app-head">
            <img src={p.image} alt={p.alt} loading="lazy" />
            <div>
              <p className="label">Application note {i + 1}</p>
              <h3>{p.name}</h3>
              <p className="kind">{p.kind}</p>
            </div>
          </div>
          <p className="desc">{p.description}</p>
          <ul className="features">
            {p.features.map((f) => (
              <li key={f}><span className="check" aria-hidden="true">✓</span><span>{f}</span></li>
            ))}
          </ul>
          <p className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</p>
          <p className="buttons">
            <a className="btn main small" href={p.demo}>Live demo ↗</a>
            <a className="btn ghost small" href={p.source}>Source</a>
          </p>
        </article>
      ))}
    </div>
  );
}
