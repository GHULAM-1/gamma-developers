import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen text-green-500 flex justify-center items-center gap-5 flex-col">
        <div className="text-7xl">under development</div>
        <div className="text-white opacity-30">
          This domain is own by{" "}
          <Link
            href="https://github.com/GHULAM-1"
            target="_blank"
            className="underline"
          >
            GhulamMohi-ud-Din ( Gamma)
          </Link>
        </div>
      </div>
    </>
  );
}
