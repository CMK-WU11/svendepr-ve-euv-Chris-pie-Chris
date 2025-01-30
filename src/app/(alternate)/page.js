import Link from "next/link";

export default function Home() {
  return (
      <section className="bg-cover bg-center w-screen h-screen bg-[url('/splash-image.jpg')]">
            <h1 className="text-center text-l">Landrup Dans</h1>
          <div className="flex items-center w-2xl h-[100%]">
            <Link href="/Aktiviteter" className="block bg-[#5E2E53] text-white rounded-md w-32 h-12 text-center items-center">Kom i gang</Link>
          </div>
      </section>
  );
}
