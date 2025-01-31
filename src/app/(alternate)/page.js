import Link from "next/link";

export default function Home() {
  return (
      <section className="bg-cover bg-center w-screen h-screen bg-[url('/splash-image.jpg')]">
            <h1 className="text-l text-left">Landrup</h1>
            <h1 className="text-l text-left">Dans</h1>
          <div className="flex justify-center w-2xl h-[100%] bottom-4">
            <Link 
              href="/Aktiviteter" 
              style={{backgroundColor: "#5E2E53",
                width: "8rem",
                height: "3rem",
                color: "white",
                borderRadius: "6px",
                textAlign: "center",
                border: "3px",
                margin: "auto",
              }}
              >Kom i gang</Link>
          </div>
      </section>
  );
}
