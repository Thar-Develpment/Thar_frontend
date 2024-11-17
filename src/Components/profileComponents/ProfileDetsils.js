import React, { Fragment } from "react";
import Edit from "../../Components/svg/Edit";

const ProfileDetsils = ({ user }) => {
  return (
    <Fragment>
      <div className=" flex justify-end">
        <span className=" cursor-pointer w-[20px] h-[20px]">
          <Edit />
        </span>
      </div>
      <div className=" flex flex-wrap sm:flex-wrap md:flex-nowrap gap-3 sm:gap-4 items-start">
        <div className=" flex flex-col gap-y-2 text-xs w-full sm:w-full md:w-1/2">
          <span>First Name</span>
          <input
            type="text"
            value={user?.Given_Name}
            readOnly
            className=" profileinput"
          />
        </div>
        <div className=" flex flex-col gap-y-2 text-xs w-full sm:w-full md:w-1/2">
          <span>Last Name</span>
          <input
            type="text"
            value={user?.Family_Name}
            readOnly
            className=" profileinput"
          />
        </div>
      </div>
      <div className=" flex flex-wrap sm:flex-wrap md:flex-nowrap gap-3 sm:gap-4 items-start mt-3">
        <div className=" flex flex-col gap-y-2 text-xs w-full sm:w-full md:w-1/2">
          <span>Email</span>
          <input
            type="text"
            value={user?.Email}
            readOnly
            className=" profileinput"
          />
        </div>
        <div className=" flex flex-col gap-y-2 text-xs w-full sm:w-full md:w-1/2">
          <span>Contact Number</span>
          <input
            type="text"
            placeholder="Contact Number"
            readOnly
            className=" profileinput"
          />
        </div>
      </div>
      {user?.wallets?.length > 0 && (
        <div className=" flex flex-wrap  justify-between items-center   gap-3 sm:gap-4  text-xs mt-3">
          {user?.wallets.map((wallet, index) => (
            <div className=" w-full flex  gap-3 sm:gap-4 justify-between flex-wrap sm:flex-wrap md:flex-nowrap">
              <div className=" flex flex-col w-full sm:w-full md:w-1/2 gap-2">
                <span>Chain Id</span>
                <input
                  type="text"
                  readOnly
                  className=" profileinput"
                  value={wallet?.ChainID}
                />
              </div>
              <div className=" flex flex-col w-full sm:w-full md:w-1/2 gap-2 flex-wrap sm:flex-wrap md:flex-nowrap">
                <span>Public Key</span>
                <input
                  type="text"
                  readOnly
                  className=" profileinput"
                  value={wallet?.PublicKey}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ProfileDetsils;
