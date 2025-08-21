import Bolt from "../icons/Bolt";
import Info from "../icons/Info";

const Infomation = () => {
  return (
    <section className="flex justify-between items-center h-[15vh] w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Developer Front-end</h1>
        <p className="text-lg font-semibold w-full max-w-96 text-zinc-400">
          I think, improve, and apply world-building. Creating a page,
          customizing and editing.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-row max-w-sm">
          <Bolt className="h-20 w-20" />
          <h1 className="font-bold text-4xl text-[#DAFDBA]">
            Welcome to my digital portfolio
          </h1>
        </div>
        <button>
          <Info />
        </button>
      </div>
    </section>
  );
};

export default Infomation;
