import { withTimer } from "@/lib/withTimer";

export function SecondsCounter({ seconds }) {
  // seconds =34000;

  const digits = seconds.toString().padStart(6, "0").split("");

  // arrayDigits = ["0", "3", "4", "0,", "0", "0"]

  return (
    <div className="row">
      {digits.map((digits, index) => {
        return(
            <div key={index} className="col text-xl" style={{padding:20, border:"solid 1px black"}}>
         <h1>{digits}</h1>
       </div>
        )
        })}
  </div> 
  )
}

export const SecondsCounterWithTimer= withTimer(SecondsCounter);
