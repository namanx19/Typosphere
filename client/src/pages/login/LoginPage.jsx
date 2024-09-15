import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../../services/index/users";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/reducers/userReducers";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    window.otpless = (otplessUser) => {
      const token = otplessUser.token;
      const jwtToken = otplessUser.idToken;
      mutate({ token, jwtToken });
    };
  }, []);

  const { mutate } = useMutation({
    mutationFn: ({ token, jwtToken }) => {
      return signup({ token, jwtToken });
    },
    onSuccess: (data) => {
      // toast.success("Welcome to Typosphere! Account created successfully!");
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      console.error("Error:", error);
      toast.error(`Error: ${error.message || "An unknown error occurred"}`);
    },
  });
  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  return (
    <MainLayout>
      <div className="flex items-center justify-center">
        <h3 className="text-xl text-red-500">
          Please refresh this page to load the OTPLess Component
        </h3>
      </div>
      <div className="my-8 flex items-center justify-center">
        <div id="otpless-login-page"></div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
