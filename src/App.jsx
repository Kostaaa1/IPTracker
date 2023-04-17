import { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import SearchForm from "./components/SearchForm";
import MapComponent from "./components/MapComponent";
import useIpData from "./hooks/useIpData";
import IpInfo from "./components/IpInfo";
import { motion } from "framer-motion";

function App() {
  const [ipQuery, setIpQuery] = useState("");
  const { data, center, isLoading } = useIpData(ipQuery);

  return (
    <>
      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
          <div className="py-[20px] mx-auto flex justify-around items-center flex-col">
            <SearchForm ipQuery={ipQuery} setIpQuery={setIpQuery} />
            <IpInfo center={center} data={data} />
          </div>
          <MapComponent data={data} center={center} />
        </motion.div>
      )}
    </>
  );
}

export default App;
