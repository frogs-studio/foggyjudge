import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">miloy23</h2>
          <p className="text-gray-600">BRUR_Frogs</p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Overall solved</span>
            <span>328</span>
          </div>
          <div className="flex justify-between">
            <span>Overall attempted</span>
            <span>378</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
