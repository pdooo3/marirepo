import Image from "next/image";
type CardProps = {
  title: string;
  text: string;
  price: number;
};
export default function Card({ title, text, price }: CardProps) {
  return (
    <div className="flex flex-row text-gray-600 mt-4 w-full bg-sky-200 hover:bg-sky-500 h-30 rounded-sm">
      <div className="relative w-2/6 max-sm:w-4/6 h-full flex ">
        <Image
          src="/e.jpeg"
          fill
          className="object-cover p-2 rounded-2xl"
          alt="card-pic"
        />
      </div>
      <div className="pr-5 pt-1 text-right w-4/6">
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
