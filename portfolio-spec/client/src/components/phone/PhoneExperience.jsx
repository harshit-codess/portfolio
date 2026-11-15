import PhoneHeading from "./PhoneHeading.jsx";

export default function PhoneExperience({ items }) {
  return (
    <section>
      <PhoneHeading num="04">Experience</PhoneHeading>
      <ol className="p-timeline">
        {items.map((item) => {
          // "Role · Place" in the data is shown on two lines here
          const [title, ...rest] = item.title.split(" · ");
          return (
            <li key={item.title} className={item.current ? "current" : ""}>
              <p className="p-when">
                {item.link ? <a href={item.link.url}>{item.link.text}</a> : item.dates}
                {item.badge && <span className={item.current ? "badge green" : "badge"}>{item.badge}</span>}
              </p>
              <p className="p-title">{title}</p>
              {rest.length > 0 && <p className="p-org">{rest.join(" · ")}</p>}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
