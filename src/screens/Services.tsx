import SliderButtons from "../components/SliderButtons";

export default function Services() {
  return (
    <section className="w-full flex flex-col items-center py-20 px-6 bg-white font-sans">
      {/* Заголовок */}
<h2 className="
  font-bold                   
  text-[120px] lg:text-[180px] 
  leading-[0.8]               
  tracking-[-0.07em]          
  text-black/90               
  uppercase
">
  Services
</h2>

      
 <div className="w-full px-[30px] relative mt-6 flex items-center justify-center">
  {/* Центрированный подзаголовок */}
  <div className="text-center">
    <p className="text-[14px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">Photograph</p>
    <p className="text-[14px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase leading-tight">Maria Abramova</p>
  </div>

  {/* Стрелки, прижатые к правому краю */}
  <div className="absolute right-[30px]">
    <SliderButtons />
  </div>
</div>

      {/* Контейнер с карточками */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-16">
        
        {/* Карточка 1 */}
        <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-[24px] font-black text-[#5a0b0b] uppercase leading-tight">
              "All Inclusive" <br /> Session
            </h3>
            <ul className="mt-8 space-y-2 text-[14px] text-gray-700 font-medium">
              <li>1. 20-25 fully retouched photos</li>
              <li>2. timeframe is up to 14 business days</li>
              <li>3. stylist, makeup artist, and studio</li>
            </ul>
          </div>
          
          <div className="flex justify-between items-end mt-12">
            <span className="text-[32px] font-bold text-[#5a0b0b]">400 $</span>
            <button className="bg-[#5a0b0b] text-white px-6 py-2 text-[12px] font-bold tracking-widest uppercase hover:bg-black transition-colors">
              Book / Call
            </button>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-[24px] font-black text-[#5a0b0b] uppercase leading-tight">
              Individual <br /> Sessions
            </h3>
            <ul className="mt-8 space-y-2 text-[14px] text-gray-700 font-medium">
              <li>1. 20-25 fully retouched photos</li>
              <li>2. timeframe is up to 14 business days</li>
            </ul>
          </div>
          
          <div className="flex justify-between items-end mt-12">
            <span className="text-[32px] font-bold text-[#5a0b0b]">150 $</span>
            <button className="bg-[#5a0b0b] text-white px-6 py-2 text-[12px] font-bold tracking-widest uppercase hover:bg-black transition-colors">
              Book / Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
