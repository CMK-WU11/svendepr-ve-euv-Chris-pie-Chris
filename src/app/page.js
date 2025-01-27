import Image from "next/image";
import Link from "next/link";
// import Velkomst from "../../public/splash-image.jpg"

export default function Home() {
  return (
      <section className="relative bg-cover bg-center w-screen h-screen bg-[url('/splash-image.jpg')]">
          <div className="flex justify-center items-center bottom-0">
            <Link href="/Aktiviteter"><button className="bg-[#5E2E53] w-48 h-10 text-white rounded-md">Kom i gang</button></Link>
          </div>
      </section>
  );
}
