import { filterOptions } from "@/constants/constants";
import { Button } from "./ui/button";

const SearchAndFilter = () => {
   const selected = "All";

   return (
      <div className="w-full h-32 bg-[#060606] flex justify-center items-center max-lg:flex-col gap-3 px-4">
         <section className="flex gap-2 w-full items-center">
            <input
               type="text"
               className="w-full bg-[#1E1E1E] placeholder:text-xs py-[0.3rem] px-4 rounded-sm "
               placeholder="Search for homework questions... "
            />
            <Button className="text-xs cursor-pointer border-white/30 border-[1px]">
               Search
            </Button>
         </section>
         <section className="flex gap-2 text-left lg:w-fit w-full">
            {filterOptions.map((option) => (
               <Button
                  key={option}
                  className={`bg-[#1E1E1E] text-sm border-white/30 border-[1px] font-medium min-w-[4.5rem] cursor-pointer ${
                     selected === option && "bg-blue-600 hover:bg-blue-700"
                  }`}
               >
                  {option}
               </Button>
            ))}
         </section>
      </div>
   );
};

export default SearchAndFilter;
