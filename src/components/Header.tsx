import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-column w-full justify-between">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Express Cooking
      </h3>
      <Button>Menu</Button>
    </div>
  );
}
