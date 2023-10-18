import { useUserAuth } from "../_utils/auth-context";

export default function Login() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // user is an object with the following properties:
  // displayName, email, emailVerified, photoURL, uid, phoneNumber, providerData

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-lg">
      {user ? (
        <div>
          {user.displayName} | {user.email}
          <img src={user.photoURL} alt="user avatar" className="w-8 h-8" />
          <button
            onClick={handleSignOut}
            className="text-lg m-2 hover:underline"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="text-lg m-2 hover:underline">
          Sign In
        </button>
      )}
    </div>
  );
}
