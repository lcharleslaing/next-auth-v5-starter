import { Loader2 } from "lucide-react";

export default function Loading() {
  // return (
  //   <>
  //   <div className="flex justify-center items-center">
  //     <h1 className="text-center font-bold text-6xl">Loading...</h1>
  //   </div>
  //   </>
  // )
  return <Loader2 size={30} className="mx-auto my-10 animate-spin" />;
}
