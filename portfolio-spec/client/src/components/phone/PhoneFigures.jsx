export default function PhoneFigures({ stats }) {
  return (
    <section className="p-figures">
      {stats.map((s) => (
        <div className="p-box p-figure" key={s.label}>
          <p className="label">{s.label}</p>
          <p className="p-value">{s.value}</p>
          <p className="small">{s.unit}</p>
        </div>
      ))}
    </section>
  );
}
