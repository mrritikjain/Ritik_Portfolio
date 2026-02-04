import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./Home";
import Interviewprep from "./Interviewprep";
import ScrollToHash from "./components/ScrollToHash";
import { Routes, Route, useLocation } from "react-router";

function AppContent() {
  const location = useLocation();
  const isInterviewPrep = location.pathname === "/interview-prep";

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#070606] text-black dark:text-white flex justify-center">
      <ScrollToHash />
      <div
        className={`w-full ${isInterviewPrep ? "" : "max-w-[1080px] pt-20"}`}
      >
        {!isInterviewPrep && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview-prep" element={<Interviewprep />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
