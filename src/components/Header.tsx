import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-column w-full justify-end my-8">
      <Button>Menu</Button>
    </div>
  );
}
