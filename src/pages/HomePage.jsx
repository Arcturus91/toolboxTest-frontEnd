import { getData } from "../services/challenge-ws";
import { useState, useEffect } from "react";
import { TableData, NavBar } from "../components";

const HomePage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res.data);
        setFiles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />

      <TableData files={files} />
    </div>
  );
};

export default HomePage;
