import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <main className="flex flex-col h-screen w-screen bg-[#151515] text-[#fdfdfd] p-4 px-6">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;