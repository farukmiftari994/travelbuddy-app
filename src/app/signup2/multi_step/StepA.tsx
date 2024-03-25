import React from "react";

function StepA({
  formData,
  handleChangeInput,
  handleNextStep,
}: {
  formData: any;
  handleChangeInput: any;
  handleNextStep: any;
}) {
  return (
    <div>
      <h1 className="m-2 pt-4 text-xl font-bold text-blue-900 text-center">
        SIGNUP INFO
      </h1>
      <div className="m-2 mt-4 text-black font-bold">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => handleChangeInput(e)}
          className="w-full mb-3 outline-none bg-white border border-grey-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChangeInput(e)}
          className="w-full mb-3 outline-none bg-white border border-grey-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
        <label className="mt-3">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChangeInput(e)}
          className="w-full mb-3 outline-none bg-white border border-grey-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2 flex justify-end items-center">
        <button
          className="bg-blue-200 px-4 py-2 rounded-xl"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepA;
