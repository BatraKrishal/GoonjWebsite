import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section bg-[url('/images/Home/mobileFlavourBg.webp')] bg-cover lg:bg-white">
      <div
        className="flavor-bg-fixed hidden md:block absolute top-0 left-0 h-[102vh]"
        style={{
          backgroundImage: "url('/images/Home/flavourBg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      />
      <div className="h-full flex lg:flex-row flex-col items-center relative">
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
