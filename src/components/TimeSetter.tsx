import { hourOptions, minuteOptions, secondOptions } from "./constants";
import { WheelPicker, WheelPickerWrapper } from "./wheel-picker";

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
