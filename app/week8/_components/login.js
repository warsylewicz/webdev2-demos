import { useUserAuth } from "../_utils/auth-context";

export default function Login() {
  const { user, gitHubSignIn, logOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-2xl">
      {user ? (
        <button onClick={handleSignOut} className="text-lg m-2 hover:underline">
          Sign Out
        </button>
      ) : (
        <button onClick={handleSignIn} className="text-lg m-2 hover:underline">
          Sign In
        </button>
      )}
    </div>
  );
}
