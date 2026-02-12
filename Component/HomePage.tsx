import Navbar from "./Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative rounded-2xl h-105 md:h-150 overflow-hidden">
      <Navbar />
      <Image
        src="/g.jpeg"
        fill
        className=" object-cover "
        alt="bg"
        sizes="(max-width: 768px) 80vw, 1400px"
        priority
      />
    </div>
  );
}
