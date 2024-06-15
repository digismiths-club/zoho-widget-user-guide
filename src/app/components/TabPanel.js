import React from "react";

function TabPanel({ tab, setTab }) {
  const tabs= ["Widget Steps","Google API","Report a Bug","Contact"]
  return (
    <>
      <div className="flex justify-around text-xs md:font-semibold sticky md:top-20 top-14 py-1 bg-white">
        {
          tabs.map((title,index)=>{
            return (
              <div
                key={index}
                className={
                  tab == index
                    ? "w-full text-center py-3 cursor-pointer border-b-2 border-black "
                    : "w-full text-center py-3 cursor-pointer border-b-2  "
                }
                onClick={() => setTab(index)}
              >
                {title}
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default TabPanel;
