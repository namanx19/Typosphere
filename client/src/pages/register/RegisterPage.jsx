import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/index/users";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/reducers/userReducers";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    window.otpless = (otplessUser) => {
      const token = otplessUser.token;
      mutate({ token });
    };
  }, []);

  const { mutate } = useMutation({
    mutationFn: ({ token }) => {
      return signup({ token });
    },
    onSuccess: (data) => {
      toast.success("Your Default Password is 12345678");
      toast.success("User registered successfully");
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      console.error("Error:", error);

      if (error.message.includes("User already exists")) {
        toast.error("User already exists. Please login.");
        navigate("/login");
      } else {
        toast.error(`Error: ${error.message || "An unknown error occurred"}`);
      }
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  return (
    <MainLayout>
      <Helmet>
        <script
          id="otpless-sdk"
          type="text/javascript"
          src="https://otpless.com/v2/auth.js"
          data-appid="QCSEGVYXV7DFFBYPT7AG"
        ></script>
      </Helmet>
      <div className="h-screen flex items-center justify-center">
        <div id="otpless-login-page"></div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
