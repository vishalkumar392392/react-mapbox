import React, { useState } from "react";
import "./Doctor.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import MapComponent from "../map/Map";
import Content from "../contents/Content";
import "../../index.css";
import { MapProvider } from "react-map-gl";
import { Button, List, ListItem, ListItemText, makeStyles, Modal, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "auto",
    margin: "150px 150px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    display: "grid",
    gridTemplateColumns: "300px 600px",
  },
}));

function Doctor() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <MapProvider>
        <Content />
        <MapComponent />
      </MapProvider>
    </div>
  );

  return (
    <div className="doctor">
      <Typography variant="h4">Doctors and Hospitals</Typography>
      <div className="doctor-card">
        <Typography variant="h5">Yours Doctors and Hospitals</Typography>
        <Typography
          className="paragraph"
          style={{ padding: "10px", marginLeft: "-10px" }}
        >
          You can see if your doctors and hospitals are in this plan network.
          You can add or remove doctors in preferences above in the Group
          information.
        </Typography>
        <div>
          <ul>
            <li className="icon">
              <CheckCircleIcon style={{ color: "green" }} />
            </li>
            <li>
              <Typography variant="h6">Dr. Jhon Doe</Typography>
              <Typography className="paragraph">General Practice</Typography>
            </li>
            <li>
              <Typography>1234 Beautiful Way</Typography>
              <Typography>Sacramento, CA 95678</Typography>
            </li>
            <li>
              <CheckCircleIcon style={{ color: "green" }} />
            </li>
            <li>
              <Typography variant="h6">
                Kaiser Foundation Hospital and Rehab Center - Vallejo
              </Typography>
              <Typography className="paragraph">
                General Acute Care Hospital
              </Typography>
            </li>
            <li>
              <Typography>6805 Five Star Blvd</Typography>
              <Typography>Rocklin, CA 95677</Typography>
            </li>
            <li>
              <CancelIcon style={{ color: "red" }} />
            </li>
            <li>
              <Typography variant="h6">Dr. Jonathon Doe</Typography>
              <Typography className="paragraph">
                Psychiatry and Neurology - Psychiatry <br /> Psychiatry and
                Neurology - Child and Adolescent Psychiatry
              </Typography>
            </li>
            <li>
              <Typography>1234 Beautiful Way</Typography>
              <Typography>Sacramento, CA 95678</Typography>
            </li>
          </ul>

          <div className="footer">
            <Typography
              variant="h6"
              gutterBottom
            >
              Doctors in Area
            </Typography>
            <Typography
              className="para"
              gutterBottom
            >
              Within a{" "}
              <span>
                <select name="cars" id="cars" className="dropdown">
                  <option value="10mile">10 mile</option>
                  <option value="20mile">20 mile</option>
                  <option value="30mile">30 mile</option>
                </select>
              </span>
              radius of 95678, there are 474 Doctors in this plan.
            </Typography>
            <Button onClick={() => setOpen(true)} > View Map </Button>|
            <Button> Provider Directory</Button>
          </div>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
