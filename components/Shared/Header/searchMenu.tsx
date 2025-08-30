import { Search } from "lucide-react";
const SearchMenu = () => {
  return (
    <div className="bg-gray-50 flex gap-5 justify-between items-center border-gray-400 border-1 w-[300px] rounded-2xl px-4">
      <span>
        <input
          className="py-2 flex-1 outline-none font-mono text-xs bg-transparent"
          type="text"
          placeholder="search a product..."
        />
      </span>
      <span>
        <Search className="text-gray-400 cursor-pointer" />
      </span>
    </div>
  );
};

export default SearchMenu;
