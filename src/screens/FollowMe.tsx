import React from 'react';
import followMeImg from '../assets/followMe.png';
import SocialLinks from '../components/SocialLinks';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', filled: true },
  { name: 'Telegram', url: 'https://t.me', filled: false },
  { name: 'WhatsApp', url: 'https://wa.me', filled: false },
];

// interface Props {}

const FollowMe: React.FC = () => {
  return (
    <div className="w-full relative mt-10">
      <h2 className="
        absolute z-10
        font-bold uppercase whitespace-nowrap
        leading-[1] tracking-[-0.015em]
        text-black/90
        left-0 w-full text-center md:text-right pr-0 md:pr-10
        top-[40px] md:top-[10px]
      " style={{ fontSize: 'clamp(48px, 13vw, 200px)' }}>
        Follow Me
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="bg-slate-100 min-h-[300px] sm:min-h-[400px] md:min-h-0">
          <img src={followMeImg} alt="Follow me" className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-0 object-cover block" />
        </div>

        <div className="flex items-center justify-center w-full h-full py-12 px-6 md:p-10">
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
