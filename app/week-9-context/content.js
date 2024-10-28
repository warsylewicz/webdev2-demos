import { useContext } from "react";
import ThemeContext from "./theme-context";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <p>This is some content in {theme === "light" ? "Light" : "Dark"} mode!</p>
  );
}
