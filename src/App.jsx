import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#070606] text-black dark:text-white flex justify-center">
        <div className="max-w-[1080px] w-[100%]">
          <Header />
          <Hero
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
