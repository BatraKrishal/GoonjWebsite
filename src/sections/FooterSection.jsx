
const FooterSection = () => {

  return (
    <section className="footer-section">

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        {/* Background image */}
        <img
          src="/images/footer.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="overflow-hidden z-10 relative">
          <h1 className="general-title text-center text-white py-5">
            #GOONJ2K26
          </h1>
        </div>


        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn border-white/20 hover:bg-white/10">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn border-white/20 hover:bg-white/10">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn border-white/20 hover:bg-white/10">
            <img src="./images/linkedin.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-goonj-light-teal font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p className="font-bold text-white mb-2">Fest Highlights</p>
              <p className="opacity-70">Musical Raga</p>
              <p className="opacity-70">Tech Expo</p>
              <p className="opacity-70">Workshops</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Explore</p>
              <p className="opacity-70">Schedule</p>
              <p className="opacity-70">Register</p>
              <p className="opacity-70">Sponsors</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p className="text-white italic">
              Subscribe to the rhythm of Innovation. Stay updated with Goonj '26 events and workshops.
            </p>
            <div className="flex justify-between items-center border-b border-white/20 py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white placeholder:text-white/40 outline-none"
              />
              <img src="/images/arrow.svg" alt="arrow" className="invert" />
            </div>
          </div>
        </div>

        <div className="copyright-box border-t border-white/10">
          <p>Copyright © 2026 Goonj Fest - GBPIET. All Rights Reserved.</p>
          <div className="flex items-center gap-7">
            <p>Guidelines</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
