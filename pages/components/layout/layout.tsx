import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
