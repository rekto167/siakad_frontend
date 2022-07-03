import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const BasicAlert = ({ alerts }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {alerts.map((alert) => (
        <Alert key={alert.id} severity={alert.alertType}>
          {alert.msg}
        </Alert>
      ))}
    </Stack>
  );
};

BasicAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(BasicAlert);
