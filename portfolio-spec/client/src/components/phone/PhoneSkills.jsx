import PhoneHeading from "./PhoneHeading.jsx";

export default function PhoneSkills({ groups }) {
  return (
    <section>
      <PhoneHeading num="03" id="skills">Specifications</PhoneHeading>
      <div className="p-box p-skills">
        {groups.map((g) => (
          <div key={g.group}>
            <p className="label">{g.group}</p>
            <p className="p-pills">
              {g.items.map((item) => <span className="p-pill" key={item}>{item}</span>)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
