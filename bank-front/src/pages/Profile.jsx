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

  const handleCancelButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <>
        <Banner user={user} />
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back</h1>
            {isEditing ? (
              <div>
                <input
                  className="edit-button-name"
                  type="text"
                  value={editedUser.firstName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, firstName: e.target.value })
                  }
                />
                <input
                  className="edit-button-name"
                  type="text"
                  value={editedUser.lastName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, lastName: e.target.value })
                  }
                />
                <div className="save-cancel-button">
                  <button
                    className="edit-save-button"
                    onClick={handleSaveButtonClick}
                  >
                    Save
                  </button>
                  <button
                    className="edit-save-button"
                    onClick={handleCancelButtonClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="name-and-button">
                <h2>
                  {" "}
                  <br />
                  {user.firstName} {user.lastName}
                </h2>
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
        </main>
      </>
      <Footer />
    </>
  );
};

export default Profile;
