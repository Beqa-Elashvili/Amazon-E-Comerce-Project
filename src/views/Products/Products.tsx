import { useEffect, useState } from "react";

export function Products() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language") as string);
    }
  }, []);

  return (
    <div>
      {language}

      <button
        onClick={() => {
          localStorage.setItem("language", "ქართული");
          setLanguage("ქართული");
        }}
      >
        ქართული
      </button>
      <button
        onClick={() => {
          localStorage.setItem("language", "ინგლისური");
          setLanguage("ინგლისური");
        }}
      >
        ინგლისური
      </button>
    </div>
  );
}
