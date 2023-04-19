import { useState, useEffect } from "react";

const sm = "780px";

export default function useMediaQuery(screen) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${sm})`;
      const media = window.matchMedia(query);
      console.log("media.matches:", media.matches);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen]);

  return matches;
}
