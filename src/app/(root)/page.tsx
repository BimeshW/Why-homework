import Questions from "@/components/Questions";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function Home() {

   return <div className="w-full min-h-[calc(100vh-4rem)]">
      <SearchAndFilter/>
      <Questions/>
   </div>;
}
