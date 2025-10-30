import { SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useScreenState } from "@/hooks/useScreenState";
import TimeSetter from "./TimeSetter";
import { useState } from "react";

export default function ExpressBookingButton({ id }: { id: string }) {
  const {
    customizingId,
    changeCustomize,
    cook,
    customizeOptions,
    setCustomizeOptions
  } = useScreenState(state => state);
  const isCustomizing = customizingId === id;
  const state = customizeOptions[id];
  const [wheelState, setWheelState] = useState(state);
  const buttonText = state.map(a => String(a).padStart(2, "0")).join(":");
  if (Boolean(customizingId) && !isCustomizing) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row w-full">
      {isCustomizing && <div className="w-full">Customize</div>}
      <Button
        className="grow-1"
        disabled={isCustomizing}
        onClick={() => cook(state)}
      >
        {buttonText}
      </Button>
      <Button
        size="icon"
        disabled={isCustomizing}
        onClick={() => changeCustomize(id)}
      >
        <SettingsIcon />
      </Button>

      {isCustomizing && (
        <>
          <TimeSetter wheelState={wheelState} setWheelState={setWheelState} />
          <Button onClick={() => changeCustomize("")}>Cancel</Button>
          <Button
            onClick={() => {
              setCustomizeOptions(id, wheelState);
              changeCustomize("");
            }}
          >
            Save
          </Button>
        </>
      )}
    </div>
  );
}
