const SliderButtons = () => {
  return (
    <div className="flex gap-2">
      {/* Левая стрелка (пустая) border-[#5a0b0b] text-[#5a0b0b]*/}
      <button className="w-10 h-10 rounded-full border border-[#5a0b0b] 
      flex items-center justify-center text-[#5a0b0b] 
      hover:scale-105 active:scale-95 transition-transform duration-300">
        <span className="text-xl mb-0.5">←</span>
      </button>
      
      {/* Правая стрелка (закрашенная) bg-[#5a0b0b] text-white */}
      <button className="w-10 h-10 rounded-full bg-[#5a0b0b] flex items-center 
      justify-center text-white hover:scale-105 active:scale-95 transition-transform duration-300">
        <span className="text-xl mb-0.5">→</span>
      </button>
    </div>
  );
};

export default SliderButtons;
