import PhoneHeader from "./PhoneHeader.jsx";
import PhoneHero from "./PhoneHero.jsx";
import PhoneFigures from "./PhoneFigures.jsx";
import PhoneAbout from "./PhoneAbout.jsx";
import PhoneProjects from "./PhoneProjects.jsx";
import PhoneSkills from "./PhoneSkills.jsx";
import PhoneExperience from "./PhoneExperience.jsx";
import PhoneContact from "./PhoneContact.jsx";
import PhoneFooter from "./PhoneFooter.jsx";

// The whole page for small screens (design 72)
export default function PhoneLayout({ data, theme, onToggleTheme }) {
  const { profile } = data;
  return (
    <div className="phone">
      <PhoneHeader profile={profile} onToggleTheme={onToggleTheme} />
      <main>
        <PhoneHero profile={profile} />
        <PhoneFigures stats={data.stats} />
        <PhoneAbout profile={profile} facts={data.facts} />
        <PhoneProjects items={data.projects} />
        <PhoneSkills groups={data.skills} />
        <PhoneExperience items={data.experience} />
        <PhoneContact profile={profile} contact={data.contact} />
      </main>
      <PhoneFooter socials={profile.socials} />
    </div>
  );
}
