import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { DefaultContainer } from "../styles/globalStlyes";
import { Library } from "../Library/Library";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";

import "./VideoServices.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // textAlign: "center",
  color: theme.palette.text.secondary,
  height: 510,
  // lineHeight: "60px",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  // field: {
  //   marginTop: 20,
  //   marginBottom: 20,
  //   display: "block",
  // },
});
export const VideoServices = () => {
  const classes = useStyles();
  // const { handleSubmit, register } = useForm();
  const [isPreview, setIsPreview] = useState(false);
  const [serviceDetails, setServiceDetails] = useState({});
  const [open, setOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const [emailError, setEmailError] = useState(false);
  // const [message, setMessage] = useState("");
  // const [messageErrorText, setMessageErrorText] = useState("");
  // const [messageError, setMessageError] = useState(false);

  // Form
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const handleOpen = () => setOpen(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setOpen(false)
      setFormValues(initialValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Please Enter Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Please Use Valid Email Format";
    }
    if (!values.message) {
      errors.message = "Please Tell Us More About Your Project";
    }
    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  // const emailValidation = () => {
  //   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  //   if (regEx.test(email)) {
  //     setEmailErrorMessage("");
  //   } else if (!regEx.test(email) && email === "") {
  //     setEmailError(true);
  //     setEmailErrorMessage("Please Enter Valid Email");
  //   } else {
  //     setEmailErrorMessage("");
  //   }
  // };

  // const projectMessage = () => {
  //   if (message === "") {
  //     setMessageError(true);
  //     setMessageErrorText("Help Us Understand Your Project More");
  //   } else {
  //     setMessageErrorText("");
  //   }
  // };

  const handleClose = () => {
    setOpen(false);
    setFormErrors({});
    setFormValues(initialValues);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setEmailError(false);
  //   setMessageError(false);
  //   emailValidation();
  //   projectMessage();
  //   if (
  //     email !== "" &&
  //     message !== ""
  //   ) {
  //     console.log("submitted")
  //   } else {
  //     console.log("not submitted")
  //   }

  // };

  // const onSubmit = (data) => console.log({data})
  // console.log(email, message)
  return (
    <DefaultContainer>
      <div
        style={{
          marginTop: "10em",
          paddingLeft: "3em",
          paddingRight: "3em",
          height: "100vh",
        }}
      >
        <Grid container spacing={2}>
          {Library.services.map((services, index) => (
            <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
              <Item elevation={12}>
                {isPreview ? (
                  <>
                    <h1>Test</h1>
                    <p
                      className="service-preview"
                      onClick={() => setIsPreview(false)}
                    >
                      close
                    </p>
                  </>
                ) : (
                  <div className="service-card">
                    <p className="service-title">{services.title}</p>
                    <p className="service-description">
                      {services.description}
                    </p>
                    <div className="detail-wrapper">
                      {services.details.map((details, index) => (
                        <p className="service-details">{details.item}</p>
                      ))}
                    </div>
                    <p className="service-price">{services.price}</p>
                    <div className="jsoh">
                      <p
                        className="service-preview"
                        onClick={() => setIsPreview(true)}
                      >
                        Preview
                      </p>
                      <div>
                        <button
                          className="btn"
                          onClick={() => setOpen(true)}
                          onClickCapture={() => setServiceDetails(services)}
                        >
                          Select Service
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Item>
            </Grid>
          ))}
        </Grid>
        {open ? (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography> */}
                <p className="modal-header">{serviceDetails.title}</p>
                <p className="modal-header">{serviceDetails.description}</p>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <div className="field">
                    {/* <TextField
                      label="Name"
                      variant="standard"
                      fullWidth
                      className="field"
                      onChange={(e) => formValues.username(e.target.value)}
                    ></TextField> */}
                    <input
                      type="text"
                      name="name"
                      className="field"
                      placeholder="Name"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <TextField
                    label="Email"
                    variant="standard"
                    fullWidth
                    className={classes.field}
                    onChange={(e) => formValues.email(e.target.value)}
                    // error={emailError}
                  ></TextField> */}
                    <input
                      type="text"
                      name="email"
                      className="field"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  <p className="errorText">{formErrors.email}</p>
                  {/* <TextField
                    label="Tell Us About Your Project"
                    variant="filled"
                    fullWidth
                    multiline
                    rows={8}
                    className={classes.field}
                    onChange={(e) => formValues.message(e.target.value)}
                    // error={messageError}
                  ></TextField> */}
                    <textarea
                      type="text"
                      name="message"
                      className="text-area"
                      placeholder="Tell Us About Your Project"
                      value={formValues.message}
                      onChange={handleChange}
                      rows="8"
                    ></textarea>
                  <p className="errorText">{formErrors.message}</p>
                  <button
                    className="modal-btn"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </Box>
            </Modal>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </DefaultContainer>
  );
};
