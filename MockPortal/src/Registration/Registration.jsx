import React from "react";

const Registration = () => {
  return (
    <>
      <div className="font-inter text-center text-2xl mt-20">
        <h2 className="mb-10 font-bold">MockPortal</h2>
        <h1>Join the Decentralized Grid</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-10 max-w-md mx-auto">
        <h2>First Name</h2>
        <input type="text" placeholder="Enter your first name" />
      </div>
    </>
  );
};

export default Registration;
