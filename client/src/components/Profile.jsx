// Profile.jsx
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import "./LogoutButton";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img className="profile-picture" src={user.picture} alt={user.name} />
        <div className="profile-info">
          <p className="profile-welcome">Welcome, {user.name}</p>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
