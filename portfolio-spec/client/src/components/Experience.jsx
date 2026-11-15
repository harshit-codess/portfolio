export default function Experience({ items }) {
  return (
    <div className="table-scroll">
      <table className="wide">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Revision</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.title}>
              <td className="mono nowrap">
                {item.link ? <a href={item.link.url}>{item.link.text}</a> : item.dates}
              </td>
              <td>
                <p className="strong">{item.title}</p>
                <p className="small">{item.points.join(" ")}</p>
              </td>
              <td className="nowrap">
                {item.badge
                  ? <span className={item.current ? "badge green" : "badge"}>{item.badge}</span>
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
