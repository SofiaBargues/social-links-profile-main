import Image from "next/image";
import jessica from "@/images/avatar-jessica.jpeg";

export default function Home() {
  return (
    <div className="bg-[#141414] h-screen flex  justify-center  w-screen">
      <div className="bg-[#1f1f1f] rounded-3xl text-white m-auto flex flex-col h-[767px] w-[482px]">
        <Image
          className="rounded-full h-28 w-28 m-auto"
          alt="jessica"
          src={jessica}
        />
        <div>name</div>
        <div>location</div>
        <div>{"Font-end developer and avid reader."}</div>
      </div>
    </div>
  );
}
