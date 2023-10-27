import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-80">
      <Button variant="ghost" size="icon">
        <SearchIcon
        // className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
        />
      </Button>
      <Input type="text" placeholder="Search" className="pl-12 pr-4" />
    </div>
  );
}
