import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="flex justify-end items-center p-4 bg-black/40 backdrop-blur-md w-full fixed top-0 z-50">
      {isAuthenticated ? (
        <div className="flex items-center gap-3 text-white">
          <span className="text-sm">👋 {user?.name || user?.email}</span>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-400 hover:font-bold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            loginWithRedirect({
              appState: { returnTo: window.location.pathname },
            })
          }
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-400 hover:font-bold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;
