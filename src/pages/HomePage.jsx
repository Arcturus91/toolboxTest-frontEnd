import { getData, getDataParams } from "../services/challenge-ws";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { TableData, NavBar, ModalAlert } from "../components";

const HomePage = () => {
  const [files, setFiles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let location = useLocation();

  const handlerChange = (event) => {
    let fileName = event.target.value;
    if (fileName) {
      setSearchParams({ fileName });
    } else {
      setSearchParams({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(false);
    getDataParams(location.search)
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => {
        setShowAlert(true);
        setErrorMessage(err.message);
      });
  };

  useEffect(() => {
    setShowAlert(false)
    getData()
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => {
        setShowAlert(true);
        setErrorMessage(err.message);
      });
  }, []);

  return (
    <div>
      <NavBar />

      {showAlert && <ModalAlert errorMessage={errorMessage} />}

      <form onSubmit={handleSubmit}>
        <label>Search for your CSV file </label>
        <input
          value={searchParams.get("fileName") || ""}
          onChange={handlerChange}
        />
        <button type="submit">Search</button>
      </form>
      <TableData files={files} />
    </div>
  );
};

export default HomePage;
