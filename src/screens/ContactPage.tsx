import contactImg from '../assets/Contact.png';

const ContactPage = () => {
  return (
    <div className="w-full relative mt-25">

      {/* Заголовок — на мобиле по центру, на десктопе влево */}
      <h2 className="
        absolute z-10
        font-bold uppercase whitespace-nowrap
        text-[48px] sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[200px]
        leading-[1] tracking-[-0.015em]
        text-black/90
        left-0 w-full text-center md:text-left md:pl-10
        top-[10px] md:top-[10px]
      ">
        Contacts
      </h2>

      <div className="w-full flex flex-col md:flex-row items-stretch">

        {/* Картинка — растягивается вверх, начинается под заголовком */}
        <div className="order-first md:order-last w-full md:w-[55%] md:pt-[9vw] md:pb-10">
          <div className="relative w-full h-[60vw] min-h-[320px] md:h-full md:min-h-0 overflow-hidden">
            <img
              src={contactImg}
              alt="Contact"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Форма */}
        <div className="order-last md:order-first w-full md:w-[45%] flex flex-col items-center md:items-start px-6 md:px-10 pt-8 md:pt-[16vw] pb-8 md:pb-10">

          {/* Subtitle — максимум 2 строки, уменьшается с контейнером */}
          <p className="w-full text-[clamp(11px,1.2vw,14px)] leading-snug mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
            As she look to the future, the commitment to capturing
            the essence of every subject remains stronger than ever.
          </p>

          <form className="w-full space-y-2 md:space-y-3">

            <div className="border-b border-black">
              <input placeholder="NAME" type="text" className="w-full outline-none uppercase font-['Inter',_sans-serif] font-medium tracking-[-0.02em] mt-2 pb-[1px] placeholder:text-gray-400 placeholder:font-medium" />
            </div>

            <div className="border-b border-black">
              <input placeholder="PHONE NUMBER" type="tel" className="w-full outline-none uppercase font-['Inter',_sans-serif] font-medium tracking-[-0.02em] mt-2 pb-[1px] placeholder:text-gray-400 placeholder:font-medium" />
            </div>

            <div className="border-b border-black">
              <input placeholder="EMAIL" type="email" className="w-full outline-none uppercase font-['Inter',_sans-serif] font-medium tracking-[-0.02em] mt-2 pb-[1px] placeholder:text-gray-400 placeholder:font-medium" />
            </div>

            <div className="border-b border-black">
              <input placeholder="SERVICE" type="text" className="w-full outline-none uppercase font-['Inter',_sans-serif] font-medium tracking-[-0.02em] mt-2 pb-[1px] placeholder:text-gray-400 placeholder:font-medium" />
            </div>

            <div className="flex justify-center pt-2">
              <button className="
                bg-[#5a0b0b] text-white
                px-6 py-2.5 w-[clamp(200px,80vw,300px)] text-center
                text-[16px] md:text-[18px] font-semibold tracking-[-0.03em] leading-[1.2] uppercase
                transition-all duration-300
                hover:bg-black hover:scale-105
              ">
                Book / Call
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
