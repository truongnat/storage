import "@/styles/globals.css";
import {
  createTheme,
  getDocumentTheme,
  NextUIProvider,
} from "@nextui-org/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      textPrimary: "#29333D",
      textMenuHover: "#30BBFC",
      textMenu: "#80848A",
      border: "#D9D8D8",
      divider: "#F6F6F6",
      describe: "#BFC1C4",
      blueChart: "#48B4F6",
    }, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      textPrimary: "#ffffff",
      textMenuHover: "#30BBFC",
      textMenu: "#80848A",
      border: "#D9D8D8",
      divider: "#F6F6F6",
      describe: "#BFC1C4",
      blueChart: "#48B4F6",
    }, // optional
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem("data-theme");
    setIsDark(theme === "dark");

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === "dark");
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
