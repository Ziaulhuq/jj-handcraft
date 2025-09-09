import { Search } from "lucide-react";
const SearchMenu = () => {
  return (
    <div className=" flex gap-0.5 justify-between items-center">
      <span>
        <select className="w-max p-1.5 border-1 border-gray-200 rounded-md text-sm outline-0">
          <option value="selected">All Products</option>
          <option>Bags</option>
          <option>Hair Band</option>
          <option>Hair Clips</option>
        </select>
      </span>
      <span>
        <input
          type="search"
          placeholder="Search..."
          className="border-1 px-2 font-medium py-1 text-[14px] rounded-md outline-0"
        />
      </span>
      <span>
        <Search className=" bg-gray-900 rounded text-sm h-[27px] w-[27px] p-0.5 text-white cursor-pointer" />
      </span>

      {/* <span>
        <input
          className="py-2 flex-1 outline-none font-mono text-xs"
          type="text"
          placeholder="search a product..."
        />
      </span>
      <span>
        <Search className="text-gray-400 cursor-pointer" />
      </span> */}
    </div>
  );
};

export default SearchMenu;
