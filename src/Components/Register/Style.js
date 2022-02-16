import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles((Yellowpagestheme) => ({
  register: {
    padding: "45px 0 80px 0",
    backgroundColor: "#edf6fd",
    position: "relative",
    backgroundSize: "380px",
  },
  loginborder: {
    backgroundColor: "#fef200",
    backgroundImage: "linear-gradient(-71deg,#fef200,#fef200 95%)",
    height: "10px",
  },
  loginRegister: {
    width: "460px",
    margin: "0 auto",
    display: "table",
    position: "relative",
    marginBottom: "30px",
    backgroundColor: "#fff",
    boxShadow: "0px 5px 23px -8px #0e0f1040",
    marginBottom: "20px",
    borderRadius: "10px",
    "& h4": {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "25px",
    },
    "& p": {
      fontSize: "14px",
      textAlign: "center",
      color: "#81898d",
    },
    "& form": {
      padding: "45px",
    },
  },
  formgroup: {
    float: "left",
    width: "100%",
    position: "relative",
    marginBottom: "20px",
    "& input": {
      height: "40px",
      border: "1px solid #bdc8d0",
      fontSize: "15px",
      fontWeight: "500",
      color: "#333",
    },
  },
  formcontrol:{
    display: "block",
    width: "100%",
    padding:" 0.375rem 0.75rem",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    borderRadius: "3px",
  }
}));
