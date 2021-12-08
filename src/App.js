import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  body: {
    margin: "10px",
  },
}));

const cars = [
  {
    id: 1,
    model: 2015,
    reg_no: 123214,
    dealer_name: "Ant",
    dealer_pincode: 123431,
  },
  {
    id: 2,
    model: 2015,
    reg_no: 127214,
    dealer_name: "Nut",
    dealer_pincode: 123431,
  },
  {
    id: 3,
    model: 2015,
    reg_no: 124214,
    dealer_name: "Kont",
    dealer_pincode: 123431,
  },
  {
    id: 4,
    model: 2015,
    reg_no: 123714,
    dealer_name: "Luv",
    dealer_pincode: 123431,
  },
  {
    id: 5,
    model: 2015,
    reg_no: 125214,
    dealer_name: "Tant",
    dealer_pincode: 123431,
  },
  {
    id: 6,
    model: 2015,
    reg_no: 923214,
    dealer_name: "Pant",
    dealer_pincode: 123431,
  },
];

function App() {
  const [car, setCar] = useState("");
  const styles = useStyles();

  const changeCar = (car) => {
    setCar(car);
  };
  return (
    <div className={styles.app}>
      <Header car={car} />
      <div className={styles.body}>
        <Dashboard cars={cars} onSelect={changeCar} />
      </div>
    </div>
  );
}

export default App;
