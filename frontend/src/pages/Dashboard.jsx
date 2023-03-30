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

import Gris from "../assets/dashboard/Gris.svg";
import Orange from "../assets/dashboard/Orange.svg";
import Vert from "../assets/dashboard/Vert.svg";
import Rose from "../assets/dashboard/Rose.svg";

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
              <Tab>Ajouter une place</Tab>
              <Tab>Tarif</Tab>
            </TabList>

            <TabPanel>
              <div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Gris}
                    alt="rectangle"
                  />

                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Orange}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Vert}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Rose}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
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
