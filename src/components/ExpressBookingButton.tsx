import { SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useScreenState } from "@/hooks/useScreenState";
import TimeSetter from "./TimeSetter";

export default function ExpressBookingButton({
  children,
  id
}: {
  children?: React.ReactNode;
  id: string;
}) {
  const { customizingId, changeCustomize } = useScreenState(state => state);
  const isCustomizing = customizingId === id;
  if (Boolean(customizingId) && !isCustomizing) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row w-full">
      {isCustomizing && <div className="w-full">Customize</div>}
      <Button className="grow-1" disabled={isCustomizing}>
        {children}
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
          <TimeSetter />
          <Button onClick={() => changeCustomize("")}>Cancel</Button>
          <Button onClick={() => changeCustomize("")}>Save</Button>
        </>
      )}
    </div>
  );
}
