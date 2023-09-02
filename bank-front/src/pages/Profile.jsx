import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// redux
import { fetchUserProfile, updateUserProfile } from "../store/UserSlice";

// components
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleEditButtonClick = () => {
    setEditedUser({
      firstName: user.firstName,
      lastName: user.lastName,
    });
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    dispatch(updateUserProfile(editedUser));
    setIsEditing(false);
  };

  return (
      <><><Banner user={user} /><main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedUser.firstName}
              onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })} />
            <input
              type="text"
              value={editedUser.lastName}
              onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })} />
            <button onClick={handleSaveButtonClick}>Save</button>
          </div>
        ) : (
          <div>
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}
            </h1>
            <button className="edit-button" onClick={handleEditButtonClick}>
              Edit Name
            </button>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main></><Footer /></>
  );
};

export default Profile;
