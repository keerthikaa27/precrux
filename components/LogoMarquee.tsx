const logos = ["Mover", "BOXnMOVE", "Dariaan", "MohByMeera", "Ostori", "WizTrek", "ProfileMagic", "Serplux", "Conor", "Bidet Australia", "Mover", "BOXnMOVE", "Dariaan", "MohByMeera", "Ostori", "WizTrek", "ProfileMagic", "Serplux", "Conor", "Bidet Australia"];
const duplicatedLogos = [...logos, ...logos];
export default function LogoMarquee() {
  return (
    /* Added bg-[#12141D] class */
    <section className="py-8 overflow-hidden bg-[#12141D]">
      <div className="relative">
        <div className="marquee-track">
          {duplicatedLogos.map((logo, i) => (
            <span
              key={i}
              className="text-white text-2xl md:text-3xl font-bold px-12 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: i % 2 === 0 ? "serif" : "sans-serif",
                fontWeight: i % 3 === 0 ? 400 : 700,
                letterSpacing: i % 4 === 0 ? "0.05em" : "-0.02em",
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
