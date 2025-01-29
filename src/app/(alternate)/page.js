import Link from "next/link";

export default function Home() {
  return (
      <section className="relative bg-cover bg-center w-screen h-screen bg-[url('/splash-image.jpg')]">
          <div className="grid justify-center items-center">
            <h1 className="font-(family-name: Roboto, Racing Sans One)">Landrup Dans</h1>
          </div>
            <Link href="/Aktiviteter" className="bottom-0"><button className="bg-[#5E2E53] w-48 h-10 text-white rounded-md">Kom i gang</button></Link>
      </section>
  );
}
