interface SliderButton {
  direction: 'prev' | 'next';
  filled: boolean;
  onClick?: () => void;
}

interface Props {
  buttons?: SliderButton[];
}

const defaultButtons: SliderButton[] = [
  { direction: 'prev', filled: false },
  { direction: 'next', filled: true },
];

const SliderButtons = ({ buttons = defaultButtons }: Props) => {
  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <button
          key={btn.direction}
          onClick={btn.onClick}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            hover:scale-105 active:scale-95 transition-transform duration-300
            ${btn.filled
              ? 'bg-[#5a0b0b] text-white'
              : 'border border-[#5a0b0b] text-[#5a0b0b]'
            }
          `}
        >
          <span className="text-xl mb-0.5">
            {btn.direction === 'prev' ? '←' : '→'}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SliderButtons;
