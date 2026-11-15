import { useEffect, useState } from "react";

// True when the screen is 640px wide or less. Updates when the window is resized or rotated.
const QUERY = "(max-width: 640px)";

export default function useIsPhone() {
  const [isPhone, setIsPhone] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setIsPhone(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isPhone;
}
