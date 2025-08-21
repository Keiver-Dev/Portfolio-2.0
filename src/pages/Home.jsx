import Presentation from "../components/Presentation";
import Info from "../components/Info";

const Home = () => {
  return (
    <main className="flex flex-col h-[95vh] w-full">
      <Presentation />
      <Info />
    </main>
  );
};

export default Home;
