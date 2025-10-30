import { SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function ExpressBookingButton({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row w-full">
      <Button>{children}</Button>
      <Button size="icon" aria-label="Submit">
        <SettingsIcon />
      </Button>
    </div>
  );
}
