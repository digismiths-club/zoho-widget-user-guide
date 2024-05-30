import Head from "next/head";
import data from './Data.json';
import Card from "./components/Card";
import NavBar from "./components/NavBar";

export default function Home() {
  const imgArr= data.imgArr;
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <NavBar></NavBar>
        <div className="md:mt-14 md:text-6xl text-5xl mt-7 font-medium">
          User Guide
        </div>
        <div className="md:w-[75%] md:mt-14 md:p-10 p-4 bg-gray-50 flex flex-col items-center justify-center border-solid md:border-2">
          {
            imgArr.map((card,index)=>{
              return (
                <Card key={index} index={index+1} url={card.url} title={card.title}/>
              )
            })
          }
        </div>
      </main>
    </>
  );
}
