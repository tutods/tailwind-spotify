import Image from "next/image";

export default function Home() {
  return (
    <div className={"h-screen flex flex-col"}>
      <div className={"flex flex-1"}>
        <aside className={"p-6 w-64 bg-zinc-950"}>sidebar</aside>
        <main className={"flex-1 p-6"}>main</main>
      </div>
      <footer className={"bg-zinc-800 border-t border-t-zinc-700 p-6"}>
        footer
      </footer>
    </div>
  );
}
