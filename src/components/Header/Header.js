import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header_container: {
    display: "block",
    float: "left",
    background: "#1861c7",
    color: "FFFFFF",
  },
}));

export default function Header(props) {
  const styles = useStyles();
  const car = props.car !== "" ? props.car : "";
  return (
    <header className={styles}>
      <Typography variant="h4">Chasis 🚘 {car}</Typography>
    </header>
  );
}
