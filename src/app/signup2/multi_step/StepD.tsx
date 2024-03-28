import React from "react";

function StepD({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
}: {
  formData: any;
  handleChangeInput: any;
  handlePrevStep: any;
  handleSubmitFormData: any;
}) {
  return (
    <div>
      <div>
        <DataConfirm label="Username" value={formData.username} />
        <DataConfirm label="Email Address" value={formData.email} />
        <DataConfirm label="First Name" value={formData.firstName} />
        <DataConfirm label="Last Name" value={formData.lastName} />
        <DataConfirm label="Birth Date" value={formData.birthDate} />
        <DataConfirm label="Traveling Dates" value={formData.travelingDates} />
        <DataConfirm
          label="Traveling Destinations"
          value={formData.travelingDestinations}
        />
        <DataConfirm label="Hobbies" value={formData.hobbies} />
        <DataConfirm label="About Yourself" value={formData.aboutYourself} />
        <div className="my-4 flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            value={formData.agreeToTerms}
            onChange={(e) => handleChangeInput(e)}
            className="w-4 h-4 mr-2 "
          />
          <label>I agree to terms and conditions</label>
        </div>
      </div>
      <div className="m-2 flex justify-between items-center">
        <button
          className="bg-blue-200 px-4 py-2 rounded-xl"
          onClick={handlePrevStep}
        >
          Prev
        </button>
        <button
          className="bg-blue-200 px-4 py-2 rounded-xl"
         
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default StepD;

const DataConfirm = ({ label, value }: { label: any; value: any }) => {
  return (
    <div className="my-3 border border-dashed border-gray-200 rounded-lg">
      <span className="mr-4 text-slate-500">{label}</span>
      <span className="mr-4 text-slate-500">{value}</span>
    </div>
  );
};
