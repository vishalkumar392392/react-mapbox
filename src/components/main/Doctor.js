import React, { useState } from "react";
import "./Doctor.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import MapComponent from "../map/Map";
import Content from "../contents/Content";
import "../../index.css";
import { MapProvider } from "react-map-gl";
import { Button, List, ListItem, makeStyles, Modal, Typography } from "@material-ui/core";


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
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'auto 1.3fr 1fr',
    alignItems: 'center',
    gap: '20px 30px'
  },
  listItem: {
      display:'block'
  },
  paragraph: {
    color: 'rgb(131, 131, 134)'
  },
  doctor: {
    width: '800px',
    margin: '4rem auto'
  },
  doctorCard: {
    marginLeft: '2rem',
    marginTop: '1.5rem'
  },
  dropdown: {
    padding: '2px 4px',
    margin: '0 6px',
    textAlign: 'center',
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    border: '1px solid rgb(184, 184, 184)'
  },
  para: {
    fontSize: '16px',
    wordspacing: '2px',
  },
  footer: {
    marginTop: '1rem',
    '$button': {
        color: 'rgb(26, 124, 163)',
        marginRight: '10px',
        border: 'none',
        backgroundColor: 'white',
        textDecoration: 'underline',
        fontSize: '16px',
        padding: 0,
        textTransform: 'none',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:' white',
            textDecoration: 'underline',
        }
    }
  }

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
    <div className={classes.doctor}>
      <Typography variant="h4">Doctors and Hospitals</Typography>
      <div className={classes.doctorCard}>
        <Typography variant="h5">Yours Doctors and Hospitals</Typography>
        <Typography
           className={classes.paragraph}
          style={{ padding: "10px", marginLeft: "-10px" }}
        >
          You can see if your doctors and hospitals are in this plan network.
          You can add or remove doctors in preferences above in the Group
          information.
        </Typography>
        <div>
        <List className={classes.list}>
            <ListItem>
              <CheckCircleIcon style={{ color: "green" }} />
            </ListItem>
            <ListItem className= {classes.listItem}>
              <Typography variant="h6">
              Dr. Jhon Doe
              </Typography>
              <Typography className={classes.paragraph}>
              General Practice
              </Typography>
            </ListItem>
            <ListItem className= {classes.listItem}>
              <Typography>1234 Beautiful Way</Typography>
              <Typography>Sacramento, CA 95678</Typography>
            </ListItem>
            <ListItem>
              <CheckCircleIcon style={{ color: "green" }} />
            </ListItem>
            <ListItem className= {classes.listItem}>
              <Typography variant="h6">
                Kaiser Foundation Hospital and Rehab Center - Vallejo
              </Typography>
              <Typography className={classes.paragraph}>
                General Acute Care Hospital
              </Typography>
            </ListItem>
            <ListItem className= {classes.listItem}>
              <Typography>6805 Five Star Blvd</Typography>
              <Typography>Rocklin, CA 95677</Typography>
            </ListItem>
            <ListItem>
              <CancelIcon style={{ color: "red" }} />
            </ListItem>
            <ListItem className= {classes.listItem}>
              <Typography variant="h6">Dr. Jonathon Doe</Typography>
              <Typography className={classes.paragraph}>
                Psychiatry and Neurology - Psychiatry <br /> Psychiatry and
                Neurology - Child and Adolescent Psychiatry
              </Typography>
            </ListItem>
            <ListItem className= {classes.listItem}>
              <Typography>1234 Beautiful Way</Typography>
              <Typography>Sacramento, CA 95678</Typography>
            </ListItem>
          </List>

          <div className='footer'>
            <Typography
              variant="h6"
              gutterBottom
            >
              Doctors in Area
            </Typography>
            <Typography
              className={classes.para}
              gutterBottom
            >
              Within a{" "}
              <span>
                <select name="cars" id="cars" className={classes.dropdown}>
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
