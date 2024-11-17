import React, { useEffect, useState } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckJWT, createWebWallet } from "../../redux/actions/googleAuth";
import Cookies from "js-cookie";
import {
  removeWalletError,
  removeWalletValue,
} from "../../redux/slices/webWalletSlice";
import { toast } from "react-toastify";

const BWallet = () => {
  const [formData, setFormData] = useState({
    username: "",
    chainId: "",
  });

  const [errors, setErrors] = useState({});
  const cookieValue = Cookies.get("snitchJWTToken");
  const { user, isAuthenticated } = useSelector(
    (state) => state.googleAuthState
  );
  const { error, value } = useSelector((state) => state.webWalletState);

  const validateForm = () => {
    const { username, chainId } = formData;
    let newErrors = {};

    // Validate username
    if (validator.isEmpty(username)) {
      newErrors.username = "Username is required";
    }

    // Validate chainId
    if (validator.isEmpty(chainId)) {
      newErrors.chainId = "Please select a chain ID";
    }

    return newErrors;
  };
  function emptyForm() {
    setFormData({
      username: "",
      chainId: "",
    });
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setErrors(false);

      dispatch(createWebWallet(formData, cookieValue));
      emptyForm();
    } else {
      setErrors(newErrors);
    }
  };
  useEffect(() => {
    if (error) {
      emptyForm();
      // alert("tet");
      dispatch(removeWalletError());
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT, // You can customize the position
        autoClose: 3000, // Auto close the toast after 3 seconds
      });
    }
    if (value) {
      emptyForm();
      dispatch(removeWalletValue());
      toast.success("Wallet Creation Success", {
        position: toast.POSITION.TOP_RIGHT, // You can customize the position
        autoClose: 3000, // Auto close the toast after 3 seconds
      });
    }
  }, [error, value]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { username, chainId } = formData;
  return (
    <div className=" px-3 sm:px-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap  justify-between gap-x-3 gap-y-3 sm:gap-x-5">
          <div className="w-full sm:w-full md:w-1/2 flex flex-col gap-2">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              id="name"
              className=" focus-within:outline-0 border rounded-md bg-gray-100 px-2 py-1"
              placeholder="User Name"
            />

            {errors.username && (
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                {errors.username}
              </span>
            )}
          </div>
          <div className="w-full sm:w-full md:w-1/2 flex flex-col gap-2">
            <select
              value={chainId}
              onChange={handleChange}
              name="chainId"
              id="walletId"
              className="focus-within:outline-0 border rounded-md bg-gray-100 px-2 py-1"
            >
              <option value="">Select your Wallet Id</option>
              <option value="matic">Matic</option>
              <option value="Ethereum">Ethereum</option>
              <option value="BNB">BNB</option>
            </select>
            {errors.chainId && (
              <span className=" bg-red-500 text-white px-2 py-1 rounded">
                {errors.chainId}
              </span>
            )}
          </div>
        </div>
        <div className=" mt-10 text-center">
          <button
            type="submit"
            className="view_all_btn  text-white view_all_hover rounded-md px-2 py-1"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default BWallet;
