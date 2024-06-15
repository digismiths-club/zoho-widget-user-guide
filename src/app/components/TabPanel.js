import React from "react";

function TabPanel({ tab, setTab }) {
  const tabs= ["Widget Steps","Google API Steps","Report a Bug","Contact"]
  return (
    <>
      <div className="flex justify-around text-xs md:font-semibold  ">
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
