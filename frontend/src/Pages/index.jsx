import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsFileLock2Fill } from "react-icons/bs";
import { IconContext } from "react-icons";
import OtpInput from "react-otp-input";
import axios from "axios";
import {
  Button,
  Container,
  ImageWrapper,
  InputField,
  LastWrapper,
  MidWrapper,
  PageLoyout,
} from "./style";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCode, setPassCode] = useState();

  const handleChange = (passCode) => setPassCode(passCode);

  const [showLogin, setShowLogin] = useState(true);

  const submitRequest = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3001/api/access/", {
      email,
      password,
    });
    if (response.status === 200) {
      alert(`A one time OTP has been sent to this email: ${email}.`);
      setShowLogin(!showLogin);
      this.resetForm();
    } else if (response.status === 500) {
      alert("Message failed to send.");
    }
  };

  const verifyOtp = async(e)=>{
    e.preventDefault();

    const response = await axios.post("http://localhost:3001/api/user/verify", {
      email,
      passCode,
    });
    if (response.status === 200) {
      alert("User successfully sign in.");
      setShowLogin(!showLogin);
      this.resetForm();
    } else if (response.status === 500) {
      alert("Wrong Otp. Pls enter the right otp.");
      setShowLogin(false);
    }

  }
  return (
    <PageLoyout>
      <Container>
        <ImageWrapper></ImageWrapper>
        <MidWrapper>
          <div className="upper">
            {showLogin ? (
              <>
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <div>
                    <CgProfile />
                  </div>
                </IconContext.Provider>

                <h3>Login</h3>
              </>
            ) : (
              <>
                <>
                  <IconContext.Provider
                    value={{ color: "white", size: "30px", style: {} }}
                  >
                    <div>
                      <BsFileLock2Fill />
                    </div>
                  </IconContext.Provider>

                  <h3>Otp</h3>
                </>
              </>
            )}
          </div>
          <div className="lower">
            {showLogin ? (
              <>
                <h3>Welcome!</h3>
                <p>Enter your login detail</p>
              </>
            ) : (
              <p>Please enter the verification code sent to your mobile</p>
            )}
          </div>
        </MidWrapper>
        <LastWrapper>
          {showLogin ? (
            <form onSubmit={submitRequest}>
              <h3>Login Here</h3>
              <InputField
                type={"text"}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <InputField
                type={"text"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit">Login</Button>
            </form>
          ) : (
            <form onSubmit={verifyOtp}>
              <h3>Verification Code</h3>
              <OtpInput
                value={passCode}
                onChange={handleChange}
                numInputs={5}
                isInputName={true}
                separator={
                  <span>
                    <strong>.</strong>
                  </span>
                }
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "2rem 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                  color: "black",
                }}
              />
              <Button type="submit" style={{width:'100%'}}>Verify</Button>
            </form>
          )}
        </LastWrapper>
      </Container>
    </PageLoyout>
  );
};

export default LoginPage;
