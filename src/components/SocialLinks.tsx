import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  filled?: boolean;
}

interface Props {
  links: SocialLink[];
}

const SocialLinks: React.FC<Props> = ({ links }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-4 w-full h-full">
      {links.map((link) =>
        link.filled ? (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#5a0b0b] text-white
              px-6 py-2.5 w-56 md:w-72 text-center
              text-[16px] md:text-[20px] font-semibold tracking-[-0.03em] leading-[1.2] uppercase
              transition-all duration-300
              hover:bg-black hover:scale-105
            "
          >
            {link.name}
          </a>
        ) : (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-[#5a0b0b] text-[#5a0b0b] bg-transparent
              px-6 py-2.5 w-56 md:w-72 text-center
              text-[16px] md:text-[20px] font-semibold tracking-[-0.03em] leading-[1.2] uppercase
              transition-all duration-300
              hover:bg-[#5a0b0b] hover:text-white hover:scale-105
            "
          >
            {link.name}
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;
