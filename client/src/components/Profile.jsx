import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img className="profilePic" src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
