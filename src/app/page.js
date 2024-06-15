import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <NavBar></NavBar>
        <div className="md:mt-12 md:text-6xl text-5xl mt-7 font-medium">
          User Guide
        </div>
          <Tabs></Tabs>
        <Footer/>
      </main>
    </>
  );
}
