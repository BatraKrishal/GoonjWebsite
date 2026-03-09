import NavBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";

const contactChannels = [
  {
    label: "Mail",
    value: "goonjgbpiet@gmail.com",
    href: "mailto:goonjgbpiet@gmail.com",
  },
  {
    label: "Instagram",
    value: "@sacgbpiet",
    href: "https://www.instagram.com/sacgbpiet/",
  },
  {
    label: "YouTube",
    value: "@OFFICIALSACGBPIET",
    href: "https://www.youtube.com/@OFFICIALSACGBPIET/",
  },
];

export const About = () => {
  return (
    <main className="bg-[#f6dfc6] text-[#523122]">
      <NavBar />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#ffcc70_0%,#f6dfc6_36%,#b63a18_100%)] px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-[#871b1a] blur-3xl md:h-72 md:w-72" />
          <div className="absolute right-[-5%] top-12 h-64 w-64 rounded-full bg-[#ff7900] blur-3xl md:h-80 md:w-80" />
          <div className="absolute bottom-[-5rem] left-1/3 h-56 w-56 rounded-full border-[22px] border-[#523122]/20" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 inline-block rotate-[-3deg] border-[3px] border-[#523122] bg-[#faeade] px-4 py-2 text-xs uppercase tracking-[0.45em]">
              About Goonj 2K26
            </p>
            <h1 className="max-w-4xl text-[4rem] uppercase leading-[0.9] tracking-[-0.05em] text-[#2b1406] md:text-[7rem]">
              A louder
              <span className="block text-[#871b1a]">festival world</span>
              for campus
            </h1>
            <p className="mt-6 max-w-2xl font-paragraph text-base leading-7 text-[#523122] md:text-lg">
              Goonj returns in 2026 as a richer, denser and more immersive
              celebration of college culture, built around colour, rhythm,
              ornament, performance and campus-scale energy.
            </p>
            <p className="mt-4 max-w-2xl font-paragraph text-base leading-7 text-[#523122]/85">
              The page structure keeps last year&apos;s core about content intact:
              who GBPIET is, where the campus is, and how people can reach the
              fest, but it reframes it for Goonj 2K26 instead of repeating the
              previous sci-fi style.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[2rem] border-2 border-[#523122] bg-[#faeade] p-6 shadow-[0_22px_50px_rgba(82,49,34,0.16)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#871b1a]">
                Visual mood
              </p>
              <p className="mt-4 text-3xl uppercase leading-none">
                Rich, festive, layered.
              </p>
            </article>
            <article className="rounded-[2rem] border-2 border-[#523122] bg-[#523122] p-6 text-[#faeade] shadow-[0_22px_50px_rgba(82,49,34,0.16)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#ffcc70]">
                Venue
              </p>
              <p className="mt-4 text-3xl uppercase leading-none">
                GBPIET, Pauri Garhwal
              </p>
            </article>
            <article className="rounded-[2rem] border-2 border-[#523122] bg-[#ffcc70] p-6 shadow-[0_22px_50px_rgba(82,49,34,0.16)] md:col-span-2">
              <p className="text-xs uppercase tracking-[0.35em] text-[#871b1a]">
                Fest spirit
              </p>
              <p className="mt-4 max-w-xl text-2xl uppercase leading-tight md:text-3xl">
                A campus-wide mix of music, theatre, dance, art, style and the
                noise of a college fest at full volume.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="institute"
        className="relative overflow-hidden bg-[#2a1308] px-5 py-16 text-[#faeade] md:px-10 md:py-24"
      >
        <div className="absolute inset-x-0 top-0 h-5 bg-[repeating-linear-gradient(90deg,#ffcc70_0,#ffcc70_90px,#b63a18_90px,#b63a18_180px,#f6dfc6_180px,#f6dfc6_270px)]" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#ffcc70]/30 bg-[#faeade]/8 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ffcc70]">
              About GBPIET
            </p>
            <h2 className="mt-4 text-4xl uppercase leading-none md:text-5xl">
              The campus behind the fest
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#ffcc70]/20 bg-black/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[#ffcc70]">
                  Established
                </p>
                <p className="mt-2 text-3xl uppercase">1989</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#ffcc70]/20 bg-black/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[#ffcc70]">
                  Academic start
                </p>
                <p className="mt-2 text-3xl uppercase">1991-92</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ffcc70]/20 bg-[#faeade] p-6 text-[#523122] shadow-[0_28px_70px_rgba(0,0,0,0.2)] md:p-8">
            <p className="font-paragraph text-lg leading-8">
              Govind Ballabh Pant Institute of Engineering and Technology,
              Pauri Garhwal, formerly known as Govind Ballabh Pant Engineering
              College, was established in 1989 as an autonomous institution
              committed to quality and excellence in technical education.
            </p>
            <p className="mt-5 font-paragraph text-lg leading-8">
              It remains one of Uttarakhand&apos;s major engineering institutions,
              created to meet the demand for well-trained professionals and to
              anchor a strong academic culture in the region. The institute began
              its first academic session in 1991-92 with a limited intake and
              was initially affiliated with Hemwati Nandan Bahuguna Garhwal
              University, Srinagar (Garhwal).
            </p>
            <p className="mt-5 font-paragraph text-lg leading-8">
              For Goonj 2K26, that academic backbone becomes the stage for a fest
              that is more expressive and more rooted in Indian visual culture.
            </p>
          </div>
        </div>
      </section>

      <section
        id="reach"
        className="bg-[#f6dfc6] px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          <article className="rounded-[2rem] border-2 border-[#523122] bg-[#ffcc70] p-6 shadow-[0_20px_55px_rgba(82,49,34,0.12)] md:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#871b1a]">
              How to reach
            </p>
            <h2 className="mt-4 text-4xl uppercase leading-none text-[#2b1406] md:text-5xl">
              Find us in Pauri
            </h2>
            <p className="mt-6 max-w-xl font-paragraph text-lg leading-8">
              Govind Ballabh Pant Institute of Engineering and Technology,
              Pauri-Garhwal, Uttarakhand, 246194.
            </p>
            <p className="mt-4 max-w-xl font-paragraph text-base leading-7 text-[#523122]/85">
              This section is adapted from last year&apos;s about page, but the
              presentation is now more festival-first: warmer tones, denser
              texture, and stronger contrast instead of the previous sci-fi
              treatment.
            </p>
            <a
              href="https://maps.app.goo.gl/YQdiqV9cGWqKcEs77"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-full border-2 border-[#523122] bg-[#faeade] px-6 py-3 text-sm uppercase tracking-[0.25em] text-[#523122] transition-transform hover:-translate-y-1"
            >
              Open map
            </a>
          </article>

          <a
            href="https://maps.app.goo.gl/YQdiqV9cGWqKcEs77"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[2rem] border-2 border-[#523122] bg-[#523122] p-3 shadow-[0_20px_55px_rgba(82,49,34,0.16)]"
          >
            <img
              src="/images/Final.png"
              alt="GBPIET campus visual"
              className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/15 bg-black/45 p-5 text-[#faeade] backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.35em] text-[#ffcc70]">
                Campus route
              </p>
              <p className="mt-2 text-2xl uppercase leading-none">
                Tap to navigate to GBPIET
              </p>
            </div>
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#871b1a] px-5 py-16 text-[#faeade] md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ffcc70]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl uppercase leading-none md:text-5xl">
              Reach the fest team
            </h2>
            <p className="mt-6 font-paragraph text-lg leading-8 text-[#faeade]/88">
              Instead of carrying over last year&apos;s personal contacts directly,
              this version points visitors to official channels for Goonj and
              SAC communication. That keeps the page current for 2026 while
              preserving the intent of the original section.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2rem] border border-[#ffcc70]/35 bg-[#faeade]/10 p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#ffcc70]">
                  {channel.label}
                </p>
                <p className="mt-4 text-2xl uppercase leading-none">
                  {channel.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};
