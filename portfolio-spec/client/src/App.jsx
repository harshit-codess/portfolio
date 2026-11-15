import { useEffect, useState } from "react";
import { getPortfolio } from "./api.js";
import Header from "./components/Header.jsx";
import TitleBlock from "./components/TitleBlock.jsx";
import Block from "./components/Block.jsx";
import KeyFigures from "./components/KeyFigures.jsx";
import Specifications from "./components/Specifications.jsx";
import Applications from "./components/Applications.jsx";
import RevisionHistory from "./components/Experience.jsx";
import Ordering from "./components/Ordering.jsx";
import Footer from "./components/Footer.jsx";
import PhoneLayout from "./components/phone/PhoneLayout.jsx";
import useIsPhone from "./useIsPhone.js";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage unavailable: fall through to the device setting
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(getInitialTheme);
  const isPhone = useIsPhone();

  useEffect(() => {
    getPortfolio()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);


  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Not saved; the theme still works for this visit
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  if (error) return <p className="message">{error}. Is the backend running?</p>;
  if (!data) return <p className="message">Loading…</p>;

  const { profile } = data;

  // Small screens get their own simpler layout; large screens are unchanged
  if (isPhone) {
    return <PhoneLayout data={data} theme={theme} onToggleTheme={toggleTheme} />;
  }

  return (
    <>
      <Header profile={profile} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <TitleBlock profile={profile} facts={data.facts} />
        <Block num="01" title="Description">
          <p className="description">{profile.bio}</p>
        </Block>
        <Block num="02" title="Key figures" flush>
          <KeyFigures stats={data.stats} />
        </Block>
        <Block num="03" title="Specifications" flush>
          <Specifications groups={data.skills} />
        </Block>
        <Block num="04" title="Applications" flush>
          <Applications items={data.projects} />
        </Block>
        <Block num="05" title="Experience" flush>
          <RevisionHistory items={data.experience} />
        </Block>
        <Block num="06" title="Ordering information" id="order">
          <Ordering profile={profile} contact={data.contact} />
        </Block>
      </main>
      <Footer footer={data.footer} socials={profile.socials} />
    </>
  );
}
