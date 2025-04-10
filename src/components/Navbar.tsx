import { AlignJustify } from "lucide-react";

const Navbar = () => {
   return (
      <nav className="w-full h-16 flex justify-between px-8 items-center bg-[#252525]">
         <h1 className="font-semibold leading-4">
            Why <br />
            Homework
         </h1>
         <AlignJustify />
      </nav>
   );
};

export default Navbar;
