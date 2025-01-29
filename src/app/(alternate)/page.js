import Link from "next/link";

export default function Home() {
  return (
      <section className="bg-cover bg-center w-screen h-screen bg-[url('/splash-image.jpg')]">
          <div className="">
            <h1 className="text-center text-l">Landrup Dans</h1>
          </div>
          <div className="w-2xl">
            <Link href="/Aktiviteter" className="bottom-0 align-middle bg-[#5E2E53] text-white rounded-md w-32"><button className="">Kom i gang</button></Link>
          </div>
      </section>
  );
}
