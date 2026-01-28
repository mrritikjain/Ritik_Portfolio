import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./Home";
import { Routes ,Route } from "react-router";


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#070606] text-black dark:text-white flex justify-center">
        <div className="max-w-[1080px] w-[100%]">
          <Header />
         <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
