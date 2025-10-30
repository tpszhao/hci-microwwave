import { WheelPicker, WheelPickerWrapper } from "./wheel-picker";

const hourOptions = [
  {
    label: "0",
    value: "0"
  },
  {
    label: "1",
    value: "1"
  }
];

const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
  label: String(i).padStart(2, "0"),
  value: String(i)
}));

const secondOptions = minuteOptions.map(a => ({ ...a }));

export default function TimeSetter() {
  return (
    <div className="w-56 items-center md:flex-column w-full my-8">
      <div className="flex items-center md:flex-row w-full justify-around">
        <div>Hours</div>
        <div>Minutes</div>
        <div>Seconds</div>
      </div>
      <WheelPickerWrapper>
        <WheelPicker
          options={hourOptions}
          visibleCount={10}
          scrollSensitivity={20}
        />
        <WheelPicker
          options={minuteOptions}
          visibleCount={10}
          scrollSensitivity={20}
        />
        <WheelPicker
          options={secondOptions}
          visibleCount={10}
          scrollSensitivity={20}
        />
      </WheelPickerWrapper>
    </div>
  );
}
