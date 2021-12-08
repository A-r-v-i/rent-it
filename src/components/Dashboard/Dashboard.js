import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { React, useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
  },
  carList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: 200,
    height: 200,
    margin: theme.spacing(1),
    "&>*": {
      textAlign: "center",
    },
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
}));

const Carlist = (props) => {
  const styles = useStyles();
  return props.cars.map((item) => (
    <Card
      key={item.id}
      className={styles.paper}
      onClick={() => {
        props.setCar(item.reg_no);
      }}
    >
      <CardHeader title={item.reg_no} subheader={item.model}></CardHeader>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Classic ride
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="textPrimary" component="p">
          {item.dealer_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.dealer_pincode}
        </Typography>
      </CardActions>
    </Card>
  ));
};

export default function Dashboard({ ...props }) {
  const styles = useStyles();
  const [selectedCar, setCar] = useState("");

  const updateCar = (car) => setCar(car);
  useEffect(() => {
    props.onSelect(selectedCar);
  }, [selectedCar, props]);
  return (
    <div className={styles.container}>
      <Typography>Dashboard</Typography>
      <Grid className={styles.carList} container spacing={1}>
        <Carlist cars={props.cars} setCar={updateCar} />
      </Grid>
    </div>
  );
}
