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
        <div className="mt-14 text-6xl font-medium">
          User Guide
        </div>
        <div className="w-[75%] mt-14 p-10 bg-gray-50 flex flex-col items-center justify-center border-solid border-2">
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
