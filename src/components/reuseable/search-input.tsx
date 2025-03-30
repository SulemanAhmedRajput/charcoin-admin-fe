import { Search } from "@mynaui/icons-react";
import { Input } from "../ui/input";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>{

}

const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  return (
    <div className="relative max-w-80">
      <Input
      variant={"newly_secondary"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground !bg-accent" />
    </div>
  );
};

export { SearchInput};