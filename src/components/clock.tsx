'use client'
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formattedTime = time.toLocaleTimeString(); // "2:45:12 PM"

  return (
    <div className="text-2xl font-mono text-white">
      {formattedTime} PST
    </div>
  );
}
