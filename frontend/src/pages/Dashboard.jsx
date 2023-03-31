import { useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Agenda from "../components/Agenda";
import SideBar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";
import NannyReservation from "../components/NannyReservation";

moment.locale("fr");
function Dashboard() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div className="">
          <SearchBar />
        </div>

        <div className="p-6 w-full overflow-hidden">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Liste des demande</Tab>
              <Tab>Agenda</Tab>
            </TabList>

            <TabPanel>
              <div>
                <NannyReservation />
              </div>
            </TabPanel>
            <TabPanel>
              <Agenda />
            </TabPanel>
            <TabPanel />
            <TabPanel />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
