import PhoneHeading from "./PhoneHeading.jsx";

// Short cards on phones: big screenshot, name, one line, three tags, two buttons
export default function PhoneProjects({ items }) {
  return (
    <section>
      <PhoneHeading num="02" id="work">Applications</PhoneHeading>
      <div className="p-projects">
        {items.map((p) => (
          <article className="p-box" key={p.name}>
            <img src={p.image} alt={p.alt} loading="lazy" />
            <div className="p-project-body">
              <p className="label">{p.kind}</p>
              <h3>{p.name}</h3>
              <p className="p-desc">{p.description}</p>
              <p className="tags">
                {p.tags.slice(0, 3).map((t) => <span className="tag" key={t}>{t}</span>)}
              </p>
              <p className="p-pair">
                <a className="btn main" href={p.demo}>Live demo ↗</a>
                <a className="btn ghost" href={p.source}>Source</a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
