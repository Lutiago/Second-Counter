import { SecondsCounterWithTimer } from "@/Components/SecondsCounter";
import { withTimer } from "@/lib/withTimer";
import Image from "next/image";

export default function Home() {
  return ( 
    <div>
       <SecondsCounterWithTimer />
    </div>
 )
}
