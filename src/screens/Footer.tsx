import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#272727] mt-[40px]">
      {/* Top section */}
      <div className="flex items-start justify-between px-10 pt-10 pb-6">
        {/* Portfolio column */}
        <div>
          <p className="text-white text-xs font-light uppercase tracking-widest mb-3">Portfolio</p>
          <ul className="space-y-1">
            {['Commercial and Individual Sessions', 'Family', 'Animals', 'Street Style', 'Model Tests'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white text-xs uppercase underline underline-offset-2 hover:opacity-70 transition-opacity">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Photograph column */}
        <div>
          <p className="text-white text-xs font-light uppercase tracking-widest mb-3">Photograph</p>
          <ul className="space-y-1">
            {['About Me', 'Reviews', 'Services', 'Follow Me'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white text-xs uppercase underline underline-offset-2 hover:opacity-70 transition-opacity">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side — Book button + Instagram */}
        <div className="flex flex-col items-end gap-4">
          <button className="border border-white text-white text-xs uppercase px-12 py-2 hover:bg-white hover:text-black transition-colors">
            Book / Call
          </button>
          <a href="#" className="text-white text-xs uppercase flex items-center gap-2 hover:opacity-70 transition-opacity">
            Instagram
            <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px]">↗</span>
          </a>
        </div>
      </div>

      {/* Big text */}
      <div className="px-[25px] pb-[25px] pt-8">
        <p className="text-white uppercase text-center leading-[1] text-[160px] tracking-[-0.05em] mb-[6px]"
          style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '160px' }}>
          Photograph
        </p>
        <p className="text-white uppercase text-center leading-[1] text-[160px] tracking-[-0.05em]"
          style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '160px' }}>
          Maria Abramova
        </p>
      </div>
    </footer>
  );
};

export default Footer;
