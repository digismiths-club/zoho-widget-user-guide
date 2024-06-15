'use client'

import React, { useState } from "react";
import TabPanel from "./TabPanel";
import ApiSteps from "./ApiSteps";
import Support from "./Support";
import Contact from "./Contact";
import ZohoCRMSteps from "./ZohoCRMSteps";

// Tabs to be added: create, Disclaimer, Protect API key, contact, support
function Tabs() {
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-gray-50 w-full md:w-[80%] h-full rounded-md flex flex-col p-3 mt-7">
      <TabPanel tab={tab} setTab={setTab} />
      <div className="mt-2 rounded-md border-[#a3a3a3] border-2 p-4 text-sm tab-content">
        {tab==0? <ZohoCRMSteps/>: tab == 1 ? <ApiSteps /> : tab == 2 ? <Support /> : <Contact />}
      </div>
    </div>
  );
}

export default Tabs;
