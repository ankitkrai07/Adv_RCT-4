import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { login } from "../Redux/Authentication/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth, isError } = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      isError: store.authReducer.isError,
    };
  }, shallowEqual);

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  return (
    <DIV error={isError.toString()}>
      <h1>Log In</h1>
      {isAuth && <h2>Login Successfull...!</h2>}
      {isError && <h2>Invalid Credentials...!</h2>}

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 40px auto;
  gap: 10px;

  input {
    height: 40px;
    font-size: large;
    border: ${({ error }) => {}};
  }
`;
