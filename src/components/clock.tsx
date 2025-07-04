'use client'
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime(); // set it immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <div className="text-2xl font-mono text-white">Loading...</div>;
  }


  const formattedTime = time.toLocaleTimeString(); // "2:45:12 PM"

  return (
    <div className="md:text-xl lg:text-2xl font-mono text-white">
      {formattedTime} PST
    </div>
  );
}
