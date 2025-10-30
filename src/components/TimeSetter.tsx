import { useState } from "react";
import { hourOptions, minuteOptions, secondOptions } from "./constants";
import { WheelPicker, WheelPickerWrapper } from "./wheel-picker";

const defaultState: [number, number, number] = [0, 0, 0];
export default function TimeSetter({
  wheelState = defaultState,
  setWheelState
}: {
  wheelState?: [number, number, number];
  setWheelState?: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
}) {
  const [hour, minute, seconds] = wheelState;
  const onValueChange = (newVal: string, index: number) => {
    setWheelState?.(oldState => {
      const newState = oldState.slice();
      newState[index] = Number(newVal);
      return newState as [number, number, number];
    });
  };

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
          value={String(hour)}
          onValueChange={val => onValueChange(val, 0)}
        />
        <WheelPicker
          options={minuteOptions}
          visibleCount={10}
          scrollSensitivity={20}
          value={String(minute)}
          onValueChange={val => onValueChange(val, 1)}
        />
        <WheelPicker
          options={secondOptions}
          visibleCount={10}
          scrollSensitivity={20}
          value={String(seconds)}
          onValueChange={val => onValueChange(val, 2)}
        />
      </WheelPickerWrapper>
    </div>
  );
}
