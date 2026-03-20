import React, { useState } from 'react';

const portfolioLinks = ['Commercial and Individual Sessions', 'Family', 'Animals', 'Street Style', 'Model Tests'];
const photographLinks = ['About Me', 'Reviews', 'Services', 'Follow Me'];

const AccordionColumn: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Mobile: clickable header */}
      <button
        className="md:hidden w-full flex items-center justify-between py-2 border-b border-white/20"
        onClick={() => setOpen((v) => !v)}
      >
        <p className="text-white text-xs font-light uppercase tracking-widest">{title}</p>
        <span className="text-white text-xs transition-transform duration-300" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
      </button>

      {/* Mobile: dropdown */}
      <ul
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pt-2 pb-3' : 'max-h-0'}`}
      >
        {items.map((item) => (
          <li key={item} className="py-[3px]">
            <a href="#" className="text-white text-xs uppercase underline underline-offset-2 hover:opacity-70 transition-opacity">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: always visible */}
      <div className="hidden md:block">
        <p className="text-white text-xs font-light uppercase tracking-widest mb-3">{title}</p>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item}>
              <a href="#" className="text-white text-xs uppercase underline underline-offset-2 hover:opacity-70 transition-opacity">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#272727] mt-[40px]">

      {/* Top section */}
      <div className="px-6 md:px-10 pt-8 md:pt-10 pb-6">

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-1">
          {/* 2-column accordion */}
          <div className="grid grid-cols-2 gap-4">
            <AccordionColumn title="Portfolio" items={portfolioLinks} />
            <AccordionColumn title="Photograph" items={photographLinks} />
          </div>

          {/* Book + Instagram stacked below */}
          <div className="flex flex-col items-center gap-3 pt-5">
            <button className="border border-white text-white text-xs uppercase px-12 py-2 w-full max-w-[260px] hover:bg-white hover:text-black transition-colors">
              Book / Call
            </button>
            <a href="#" className="text-white text-xs uppercase flex items-center gap-2 hover:opacity-70 transition-opacity">
              Instagram
              <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* Desktop layout — original */}
        <div className="hidden md:flex items-start justify-between gap-6">
          <AccordionColumn title="Portfolio" items={portfolioLinks} />
          <AccordionColumn title="Photograph" items={photographLinks} />
          <div className="flex flex-col items-end gap-4 shrink-0">
            <button className="border border-white text-white text-xs uppercase px-12 py-2 whitespace-nowrap hover:bg-white hover:text-black transition-colors">
              Book / Call
            </button>
            <a href="#" className="text-white text-xs uppercase flex items-center gap-2 hover:opacity-70 transition-opacity whitespace-nowrap">
              Instagram
              <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px]">↗</span>
            </a>
          </div>
        </div>

      </div>

      {/* Big text */}
      <div className="px-[25px] pb-[25px] pt-8">
        <p
          className="text-white uppercase text-center leading-[1] tracking-[-0.05em] mb-[6px]"
          style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(28px, 10vw, 160px)' }}
        >
          Photograph
        </p>
        <p
          className="text-white uppercase text-center leading-[1] tracking-[-0.05em]"
          style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(28px, 10vw, 160px)' }}
        >
          Maria Abramova
        </p>
      </div>

    </footer>
  );
};

export default Footer;
