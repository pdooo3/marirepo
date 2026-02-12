import Image from "next/image";
export default function PicToPic() {
  return (
    <div className="relative flex w-full h-100 md:h-[520px] p-2 bg-cover bg-center mt-10">
      <Image
        src="/a.jpeg"
        height={6700}
        width={1400}
        className="w-full h-100 md:h-[520px] object-cover rounded-xs"
        alt="pic6"
      />
      <div className="absolute flex flex-row space-x-4 w-1/2 bottom-2 left-5">
        <Image
          src="/e.jpeg"
          height={150}
          width={350}
          className="w-1/3 md:w-1/4 h-20 rounded-xl"
          alt="pic6"
        />
        <Image
          src="/c.jpeg"
          height={150}
          width={350}
          className="w-1/3 md:w-1/4 h-20 rounded-xl"
          alt="pic6"
        />
      </div>
    </div>
  );
}
