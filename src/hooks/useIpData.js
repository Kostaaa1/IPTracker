import axios from "axios";
import { useEffect, useState } from "react";

const useIpData = (ipQuery) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [center, setCenter] = useState([]);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const res = await axios.get(
          `https://api.ipdata.co/${ipQuery || ""}?api-key=5487fe827551d1c9bfba54537f7d2b3a3b93ae4c1fa946dea43a417b`
        );

        const ipData = res.data;
        setData(ipData);
        setIsLoading(false);
        setCenter([ipData.latitude, ipData.longitude]);
      } catch (error) {
        if (error) {
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchIpAddress();
  }, [ipQuery]);

  return { data, center, isLoading };
};

export default useIpData;
