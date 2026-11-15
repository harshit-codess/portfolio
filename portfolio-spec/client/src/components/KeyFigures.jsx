export default function KeyFigures({ stats }) {
  return (
    <div className="cells">
      {stats.map((s) => (
        <div className="cell figure" key={s.label}>
          <p className="label">{s.label}</p>
          <p className="value">{s.value}</p>
          <p className="small">{s.unit}</p>
        </div>
      ))}
    </div>
  );
}
