import { useContext } from "react";
import ThemeContext from "./theme-context";

function Toolbar() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button className="border m-2" onClick={() => setTheme("dark")}>
        Dark Theme
      </button>
      <button className="border m-2" onClick={() => setTheme("light")}>
        Light Theme
      </button>
    </div>
  );
}

export default Toolbar;
