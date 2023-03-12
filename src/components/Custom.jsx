import "./App.css";
import { useState } from "react";

function Custom() {
  const [fileDamage, setFileDamage] = useState(null);
  const [filePlate, setFilePlate] = useState(null);

  const [errordamage, setErrorDamage] = useState(true);
  const [errorPlate, setErrorPlate] = useState(true);

  const [damageData, setDamageData] = useState(null);
  const [plateData, setPlateData] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchDamageFile = async () => {
    const fileData = new FormData();

    if (!fileDamage) return setErrorDamage(true);

    setLoading(true);

    fileData.append("file", fileDamage);

    const url =
      "http://ec2-54-74-190-189.eu-west-1.compute.amazonaws.com:5000/predict_damages/";

    const res = await fetch(url, {
      method: "POST",
      body: fileData,
    });
    const data = await res.json();
    console.log(data);
    setDamageData(data);
    setLoading(false);
  };

  const fetchPlateFile = async () => {
    const fileData = new FormData();

    if (!filePlate) return setErrorPlate(true);
    setLoading(true);
    fileData.append("file", fileData);

    const url =
      "http://ec2-54-74-190-189.eu-west-1.compute.amazonaws.com:5000/predict_plate/";

    const res = await fetch(url, {
      method: "POST",
      body: fileData,
    });

    const data = await res.json();

    console.log(data);
    setPlateData(data);
    setErrorPlate(false);
    setLoading(false);
  };

  return (
    <>
      <h1>{loading && "Loading..."}</h1>
      <div className="container">
        <div className="left">
          <h2>Detect Damage</h2>
          <input
            onChange={(e) => {
              setFileDamage(e.target.files[0]);
              setErrorDamage(false);
            }}
            type="file"
          />
          {errordamage && <p>Please select a file</p>}
          <button onClick={fetchDamageFile}>Submit</button>
          {damageData && <p className="result">{damageData?.damage_model}</p>}
        </div>
        <div className="right">
          <h2>Detect Plate</h2>
          <input
            onChange={(e) => {
              setFilePlate(e.target.files[0]);
              setErrorPlate(false);
            }}
            type="file"
          />
          {errorPlate && <p>Please select a file</p>}
          <button onClick={fetchPlateFile}>Submit</button>
          {plateData && <p className="result">{plateData?.plate_model}</p>}
        </div>
      </div>
      <p className="error-text">{damageData?.message && damageData?.message}</p>
      <p className="error-text">{plateData?.message && plateData?.message}</p>
    </>
  );
}

export default Custom;
