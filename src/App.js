import { useState } from "react";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? " container light" : "container dark"}>
      <Switch theme={theme} setTheme={setTheme} />
      <Footer/>
    </div>
  );
}

export default App;
