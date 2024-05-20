import Image from "next/image";
import jessica from "@/images/avatar-jessica.jpeg";

export default function Home() {
  return (
    <div className="bg-[#141414] h-screen flex  justify-center  w-screen">
      <div className="bg-[#1f1f1f] rounded-3xl p-10 text-center text-white m-auto flex flex-col h-[767px] w-[482px]">
        <div className="flex justify-center">
          <Image
            className="rounded-full h-28 w-28 m-6"
            alt="jessica"
            src={jessica}
          />
        </div>
        <div className="flex flex-col m-6 gap-4">
          <h1 className="font-bold text-3xl">Jessica Randall</h1>
          <h2 className="text-[#bfde5c] text-lg font-bold">
            London, United Kingdom
          </h2>
        </div>
        <div cla>
          <p className=" font-extralight">
            "Font-end developer and avid reader."
            <div className="bg-[#333333] rounded-md flex justify-center h-16 w-36">
              <div>gdrf</div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
