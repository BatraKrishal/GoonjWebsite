import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section relative">
      {/* Background — counter-translated by GSAP to stay fixed while section scrolls horizontally */}
      <div
        className="flavor-bg-fixed absolute top-0 left-0 h-full"
        style={{
          backgroundImage: "url('/images/flavor-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      />

      <div className="h-full flex lg:flex-row flex-col items-center relative z-10">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
