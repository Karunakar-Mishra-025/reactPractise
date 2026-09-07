import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Settings</h2>

      <p>Current theme: {theme}</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default Settings;