export default function Specifications({ groups }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Value</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <tr key={g.group}>
              <td className="mono nowrap">{g.group}</td>
              <td>{g.items.join(", ")}</td>
              <td className="mono nowrap">{g.items.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
