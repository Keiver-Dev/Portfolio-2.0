import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="flex flex-col h-screen w-screen bg-[#151515] text-[#fdfdfd] p-4 px-6">
      <Header />
      <Home />
    </main>
  );
};

export default App;