import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import Subsidebar from "../global/Subdrawer";

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Box>
          {" "}
          <Subsidebar /><hr></hr>
        </Box>
        
        <Box m="20px">
          <Box
            width={"900px"}
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(1, 0fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {" "}
            <Typography variant="h5" component="h5">
              Reports
            </Typography>
            <TextField
              variant="filled"
              type="text"
              label="Select Report Type"
              sx={{ gridColumn: "span 2" }}
              select
            />
            <TextField
              fullWidth
              variant="filled"
              type="calender"
              label="Start Date"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              variant="filled"
              type="text"
              label="Due Date"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              variant="filled"
              type="text"
              label="Agency"
              select
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              variant="filled"
              type="text"
              label="Select Format"
              select
            />
            <Typography variant="h6" component="h6">
              Use Date
            </Typography>
            <br />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Collected"
            />
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
