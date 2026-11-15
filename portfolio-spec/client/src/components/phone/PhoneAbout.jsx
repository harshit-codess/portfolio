import PhoneHeading from "./PhoneHeading.jsx";

export default function PhoneAbout({ profile, facts }) {
  return (
    <section>
      <PhoneHeading num="01">Description</PhoneHeading>
      <p className="p-bio">{profile.bio}</p>
      <dl className="p-box p-facts">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="label">{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
