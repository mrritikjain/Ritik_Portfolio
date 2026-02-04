import React from "react";
import { Link } from "react-router";

const Interviewprep = () => {
  const codeBlocks = {
    routing: `// ScrollToHash.jsx - Custom hook for cross-page navigation
useEffect(() => {
  if (hash) {
    const targetId = hash.replace("#", "");
    const scrollAttempt = setInterval(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        clearInterval(scrollAttempt);
      }
    }, 100);
  }
}, [pathname, hash]);`,
    theme: `// ThemeContext.jsx - Global state management
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};`,
    contact: `// Contact.jsx - Async form submission
const onSubmit = async (event) => {
  const formData = new FormData(event.target);
  formData.append("access_key", "your-key-here");
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });
  const data = await response.json();
  if(data.success) { // Handle UI feedback }
};`,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#070606] text-gray-900 dark:text-gray-100 p-6 md:p-20 font-Outfit selection:bg-[#4960d4] selection:text-white">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-[#4960d4] hover:underline mb-12 font-bold group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">
            ←
          </span>{" "}
          Back to Portfolio
        </Link>

        <header className="mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#4960d4]/10 text-[#4960d4] text-xs font-bold uppercase tracking-widest mb-6">
            Technical Case Study
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            The <span className="text-[#4960d4]">Architecture.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
            A high-performance, responsive portfolio built with the modern
            MERN-edge approach (Vite + React 19 + Tailwind CSS).
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-32">
            {/* 1. Navigation Flow */}
            <section>
              <h2 className="text-4xl font-bold mb-10 flex items-center gap-4">
                <span className="text-[#4960d4]">01.</span> Core Routing Logic
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  The primary challenge was{" "}
                  <strong>cross-page anchor navigation</strong>. In a React SPA,
                  clicking a hash link (e.g., <code>/interview-prep</code> to{" "}
                  <code>/#projects</code>) doesn't automatically trigger a
                  scroll because the element isn't in the DOM yet.
                </p>
                <div className="bg-gray-50 dark:bg-[#1a1c23] p-8 rounded-4xl border border-gray-100 dark:border-gray-800">
                  <h4 className="font-bold mb-4 text-[#4960d4]">
                    The "Retry-Scroll" Implementation:
                  </h4>
                  <pre className="text-xs md:text-sm overflow-x-auto p-4 bg-gray-900 text-gray-100 rounded-xl mb-6 font-mono">
                    {codeBlocks.routing}
                  </pre>
                  <p className="text-sm text-gray-500 italic">
                    I implemented an interval-based observer that checks for the
                    element every 100ms. This ensures the scroll happens only
                    after the route transition and DOM rendering are complete.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Global State Management */}
            <section>
              <h2 className="text-4xl font-bold mb-10 flex items-center gap-4">
                <span className="text-[#4960d4]">02.</span> State Architecture
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  The application uses <strong>React Context API</strong> for
                  global theme management. This ensures consistent styling
                  across complex nested components without prop-drilling.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-[#4960d4] text-white rounded-4xl shadow-xl shadow-[#4960d433]">
                    <h4 className="text-xl font-bold mb-4 italic">
                      Design Choice: Why Context?
                    </h4>
                    <p className="text-sm opacity-90 leading-relaxed">
                      "Redux was overkill for a portfolio. Context API provided
                      the perfect balance of performance and simplicity for
                      managing the 'Light/Dark' mode state globally."
                    </p>
                  </div>
                  <div className="p-8 bg-gray-50 dark:bg-[#1a1c23] rounded-4xl border border-gray-100 dark:border-gray-800">
                    <pre className="text-[10px] md:text-xs overflow-x-auto p-3 bg-gray-900 text-gray-100 rounded-xl font-mono">
                      {codeBlocks.theme}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Serverless Integration */}
            <section>
              <h2 className="text-4xl font-bold mb-10 flex items-center gap-4">
                <span className="text-[#4960d4]">03.</span> API & Data Handling
              </h2>
              <div className="space-y-10">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  For the contact form, I used <strong>Web3Forms</strong> to
                  handle SMTP delivery without a dedicated backend server.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["Async Fetch", "FormData API", "Loading States"].map(
                    (feature, i) => (
                      <div
                        key={i}
                        className="p-6 bg-white dark:bg-[#1a1c23] rounded-2xl border border-gray-100 dark:border-gray-800 text-center"
                      >
                        <div className="text-2xl mb-2 text-[#4960d4]">
                          0{i + 1}
                        </div>
                        <h5 className="font-bold text-sm uppercase tracking-wider">
                          {feature}
                        </h5>
                      </div>
                    ),
                  )}
                </div>
                <div className="p-8 bg-gray-50 dark:bg-[#1a1c23] rounded-[2rem] border border-gray-100 dark:border-gray-800">
                  <pre className="text-[10px] md:text-xs overflow-x-auto p-4 bg-gray-900 text-gray-100 rounded-xl font-mono">
                    {codeBlocks.contact}
                  </pre>
                </div>
              </div>
            </section>

            {/* 4. Complexity Optimization */}
            <section>
              <h2 className="text-4xl font-bold mb-10 flex items-center gap-4">
                <span className="text-[#4960d4]">04.</span> Layout Engineering
              </h2>
              <div className="space-y-8">
                <div className="p-8 bg-[#4960d4]/5 border border-[#4960d4]/20 rounded-4xl">
                  <h4 className="text-2xl font-bold mb-4">
                    The Project Carousel "Peek" Effect
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    A key requirement was showing exactly 1.5 cards on desktop.
                    I achieved this through a specialized grid/flex combination:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#4960d4]/20 text-[#4960d4] flex items-center justify-center text-xs font-bold shrink-0">
                        1
                      </span>
                      <p className="text-sm">
                        Set <code>min-w-[65%]</code> on cards to ensure the next
                        card peeks significantly.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#4960d4]/20 text-[#4960d4] flex items-center justify-center text-xs font-bold shrink-0">
                        2
                      </span>
                      <p className="text-sm">
                        Used <code>snap-mandatory</code> on the container for a
                        "physics-based" scrolling feel.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Quick Reference */}
          <div className="lg:col-span-4 space-y-10">
            <div className="sticky top-32 space-y-10">
              <div className="p-10 bg-gray-900 text-white rounded-[3rem] shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Quick Recap</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-bold mb-1 tracking-widest">
                      Stack
                    </p>
                    <p className="font-bold">React 19, Vite, Tailwind</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-bold mb-1 tracking-widest">
                      Navigation
                    </p>
                    <p className="font-bold">React Router 7 + HashObserver</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-bold mb-1 tracking-widest">
                      Aesthetics
                    </p>
                    <p className="font-bold">Glassmorphism / HSL Palettes</p>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                  <p className="text-xs opacity-60">Ready to present!</p>
                </div>
              </div>

              <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] bg-gray-50 dark:bg-[#1a1c23]">
                <h4 className="font-bold mb-4">Interview Tip 💡</h4>
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  "If asked about bugs, mention the cross-page hash navigation.
                  Explain how you solved it using an interval-based DOM
                  observer—this shows deep understanding of the React
                  lifecycle."
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-40 mb-20 pt-20 border-t border-gray-100 dark:border-gray-800 text-center">
          <h3 className="text-xl font-bold text-gray-400 mb-2">
            Developed by Ritik Jain
          </h3>
          <p className="text-sm text-gray-500">
            © 2026 • Fullstack Developer Blueprint
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Interviewprep;
