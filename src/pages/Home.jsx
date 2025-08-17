import Presentation from "../components/Presentation";
import Info from "../components/Info";

const Home = () => {
  return (
    <section className="flex flex-col h-screen w-full">
      <Presentation />
      <Info />
    </section>
  );
};

export default Home;
