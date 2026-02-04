import { useState } from "react";
import { FiMail, FiArrowRight, FiCheckCircle, FiLoader } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // User needs to replace this

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:max-w-md mx-auto">
            {/* Email Card */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-[#1a1c23] border border-gray-100 dark:border-gray-800 shadow-sm hover:border-[#4960d4] dark:hover:border-[#4960d4] group transition-all duration-300">
              <FiMail className="text-2xl text-gray-900 dark:text-white mb-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center">
                jainritik@gmail.com
              </p>
              <a
                href="mailto:jainritik@gmail.com"
                className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-[#4960d4] transition-colors"
              >
                Write me <FiArrowRight />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-[#1a1c23] border border-gray-100 dark:border-gray-800 shadow-sm hover:border-[#4960d4] dark:hover:border-[#4960d4] group transition-all duration-300">
              <FaWhatsapp className="text-2xl text-gray-900 dark:text-white mb-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                WhatsApp
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center">
                +91 8386835945
              </p>
              <a
                href="https://wa.me/918386835945"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-[#4960d4] transition-colors"
              >
                Chat now <FiArrowRight />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-8 w-full bg-white dark:bg-transparent p-6 md:p-0 rounded-2xl"
            >
              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#fcfcfc] dark:bg-[#0a0a0a] px-2 text-xs font-medium text-gray-500 dark:text-gray-400 transition-all z-10">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Insert your name"
                  className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 outline-none focus:border-[#4960d4] transition-all"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#fcfcfc] dark:bg-[#0a0a0a] px-2 text-xs font-medium text-gray-500 dark:text-gray-400 transition-all z-10">
                  Mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Insert your email"
                  className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 outline-none focus:border-[#4960d4] transition-all"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#fcfcfc] dark:bg-[#0a0a0a] px-2 text-xs font-medium text-gray-500 dark:text-gray-400 transition-all z-10">
                  Project
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Write your project"
                  className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 outline-none focus:border-[#4960d4] min-h-[160px] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full md:w-fit px-10 py-4 bg-[#4960d4] text-white font-semibold rounded-xl hover:bg-[#3b4ecc] transition-all shadow-lg hover:shadow-[#4960d433] transform hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center gap-2 ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? (
                  <>
                    <FiLoader className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {status !== "idle" && (
              <div
                className={`mt-6 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${status === "success" ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"}`}
              >
                {status === "success" && (
                  <FiCheckCircle className="text-xl shrink-0" />
                )}
                <p className="text-sm font-medium">{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
