/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import jessica from "@/images/avatar-jessica.jpeg";
import { Button } from "./button";

export default function Home() {
  return (
    <div className="bg-[#141414] h-screen flex  justify-center  w-screen">
      <div className="bg-[#1f1f1f] rounded-2xl p-10 text-center text-white m-auto flex flex-col h-[767px] w-[482px]">
        <div className="flex justify-center">
          <Image
            className="rounded-full h-28 w-28 m-3"
            alt="jessica"
            src={jessica}
          />
        </div>
        <div className="flex flex-col m-6 gap-4">
          <h1 className="font-semibold text-3xl">Jessica Randall</h1>
          <h2 className="text-[#bfde5c] text-lg font-bold">
            London, United Kingdom
          </h2>
        </div>
        <div className="flex gap-5 flex-col">
          <p className="text-[#b0b0b0] text-lg">
            "Font-end developer and avid reader."
          </p>
          <Button name="GitHub" />
          <Button name="Frontend Mentor" />
          <Button name="LinkedIn" />
          <Button name="Twitter" />
          <Button name="Instagram" />
        </div>
      </div>
    </div>
  );
}
