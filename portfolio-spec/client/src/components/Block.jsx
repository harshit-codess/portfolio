// One numbered, bordered section of the sheet.
// "flush" removes the inner padding so tables and cell grids touch the border.
export default function Block({ num, title, id, flush = false, children }) {
  return (
    <section className="sheet block" id={id}>
      <h2 className="block-head">
        <span>{num} · {title}</span>
        <span className="ref">HR-FS / {num}</span>
      </h2>
      <div className={flush ? "" : "block-body"}>{children}</div>
    </section>
  );
}
