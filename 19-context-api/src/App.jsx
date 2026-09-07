import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Settings from "./components/Settings";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light"
          ? "min-h-screen bg-white text-gray-900"
          : "min-h-screen bg-gray-900 text-white"
      }
    >
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold">
          Context API Practice
        </h1>

        <p className="mt-4">
          Current theme: {theme}
        </p>

        <Settings />
      </main>
    </div>
  );
};

export default App;