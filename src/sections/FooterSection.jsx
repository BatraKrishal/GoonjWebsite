const FooterSection = () => {
  const socialLinks = [
    {
      icon: "/images/yt.svg",
      href: "https://www.youtube.com/@OFFICIALSACGBPIET/",
      label: "YouTube",
    },
    {
      icon: "/images/insta.svg",
      href: "https://www.instagram.com/sacgbpiet/",
      label: "Instagram",
    },
    {
      icon: "/images/linkedin.svg",
      href: "https://www.linkedin.com/company/goonj-gbpec-pauri/",
      label: "LinkedIn",
    },
  ];

  return (
    <section className="footer-section text-white">

      {/* TOP — footer.png hero area with hashtag + social icons */}
      <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <img
          src="/images/footer.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="overflow-hidden z-10 relative md:pt-[15vh] pt-[8vh]">
          <h1 className="general-title text-center text-white py-5">
            #GOONJ2K26
          </h1>
        </div>

        <div className="relative z-10 mt-5 flex-center gap-5 md:mt-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="social-btn border-white/20 bg-[#222123] hover:bg-[#18161a]"
            >
              <img src={link.icon} alt="" />
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM — solid black content area */}
      <div className="bg-black">
        <div className="md:px-10 px-5 py-16 flex gap-10 md:flex-row flex-col justify-between text-goonj-light-teal font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p className="font-bold text-white mb-2">Fest Highlights</p>
              <p className="opacity-70">Musical Raga</p>
              <p className="opacity-70">Tech Expo</p>
              <p className="opacity-70">Workshops</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Explore</p>
              <a href="/" className="block opacity-70 transition-opacity hover:opacity-100">Home</a>
              <a href="/about" className="block opacity-70 transition-opacity hover:opacity-100">About</a>
              <a href="mailto:goonjgbpiet@gmail.com" className="block opacity-70 transition-opacity hover:opacity-100">Contact</a>
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

        <div className="copyright-box  border-t border-white/10">
          <p>Copyright © 2026 Goonj Fest - GBPIET. All Rights Reserved.</p>
          <div className="flex items-center gap-7">
            <a href="https://goonj.gbpiet.in/" target="_blank" rel="noreferrer">
              Last Year
            </a>
            <a href="mailto:goonjgbpiet@gmail.com">Mail</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FooterSection;
