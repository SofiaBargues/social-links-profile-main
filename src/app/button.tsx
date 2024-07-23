export function Button({ name }: { name: string }) {
  return (
    <div className="bg-[#333333] text-white hover:bg-[#b9ed32] cursor-pointer hover:text-[#333333] font-bold  rounded-lg text-lg flex flex-col align-middle justify-center h-14 w-full">
      <div>{name}</div>
    </div>
  );
}
