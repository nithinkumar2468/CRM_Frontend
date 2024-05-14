import {
    Alert,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import RefreshIcon from "@mui/icons-material/Refresh";
  
  export const Captcha = () => {
    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const refreshString = () => {
      setText("");
      setCaptcha(Math.random().toString(36).slice(8));
    };
  
    const matchCaptcha = (event) => {
      event.preventDefault();
      if (text === captcha) {
        setValid(false);
        setSuccess(true);
      } else {
        setValid(true);
        setSuccess(false);
      }
    };
  
    return (
      <div>
      {/* <React.Fragment>
        {success && (
          <Alert variant="outlined" sx={{ marginBottom: "50px" }}>
            Successful
          </Alert>
        )}
        <div className="card">
        
          <Divider />
  
          <CardContent>
            <CardActions>
              <div className="h3">{captcha}</div>
              <Button
                startIcon={<RefreshIcon />}
                onClick={() => refreshString()}
              ></Button>
            </CardActions>
  
            <form onSubmit={matchCaptcha}>
              <TextField
                label="Enter Captcha"
                focused
                value={text}
                fullWidth
                onChange={(e) => setText(e.target.value)}
                error={valid}
                required
                helperText={valid && "Invalid Captcha"}
              />
  
            </form>
          </CardContent>
        </div>
      </React.Fragment> */}</div>
    );
  };
  export default Captcha;



 /*  <React.Fragment>
                                    {success && (
                                        <Alert class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                            Successful
                                        </Alert>
                                    )}
                                    <div className="card">
 
                                        <Divider />
 
                                        <CardContent>
                                            <CardActions>
                                                <div className="h3">{captcha}</div>
                                                <Button
                                                    startIcon={<RefreshIcon />}
                                                    onClick={() => refreshString()}
                                                ></Button>
                                            </CardActions>
 
 
                                            <label>Enter Captcha</label>
                                            <TextField
                                                value={captchaInput}
                                                onChange={(e) => setCaptchaInput(e.target.value)}
                                                class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                            />
 
                                        </CardContent>
                                    </div>
                                </React.Fragment>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </form>
                            {validationMessage && (
                                <p className="text-red-500">{validationMessage}</p>
                            )}
                            {valid && (
                                <p className="text-red-500">
                                    Captcha validation failed. Please try again.
                                </p>
                            )}
                            {success && <p className="text-green-500">Login successful!</p>} */