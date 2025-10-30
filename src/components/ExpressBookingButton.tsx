import { SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useScreenState } from "@/hooks/useScreenState";

export default function ExpressBookingButton({
  children,
  id
}: {
  children?: React.ReactNode;
  id: string;
}) {
  const isCustomizing = useScreenState(state => state.customizingId === id);
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row w-full">
      <Button className="grow-1" disabled={isCustomizing}>
        {children}
      </Button>
      <Button size="icon" aria-label="Submit">
        <SettingsIcon />
      </Button>
    </div>
  );
}
