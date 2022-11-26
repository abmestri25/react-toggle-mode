import { useState } from "react";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`container ${theme ? "light" : "dark"} `}>
      <Switch theme={theme} setTheme={setTheme} />
      <Footer/>
    </div>
  );
}

export default App;
