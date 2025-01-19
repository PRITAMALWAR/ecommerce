import React, { useState } from "react";

const Profile = () => {

  const defaultUser = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    profilePicture:
      "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png",
  };

  const randomUsers = [
    {
      name: "Alice Smith",
      email: "alice.smith@example.com",
      profilePicture:
        "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      profilePicture:
        "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_male_icon_192702.png",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      profilePicture:
        "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png",
    },
  ];

  const [user, setUser] = useState(defaultUser);

  const handleLogout = () => {
    const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
    setUser(randomUser); 

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">{user.name}</h2>
        <p className="text-center text-gray-600 mb-4">{user.email}</p>

        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
