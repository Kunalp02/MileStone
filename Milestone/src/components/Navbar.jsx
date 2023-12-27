import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
    console.log('User logged out successfully!')
  }


  return (
    <div className="w-[100%] flex flex-wrap absolute text-white top-0 flex h-auto z-1">
      <nav className="w-full flex justify-start items-center px-10 py-5">
        <ul className="text-slate-500 gap-8">
          <li className="inline-block mr-5 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-slate-50" : "text-slate-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="inline-block mr-5 ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-slate-50" : "text-slate-500"
              }
            >
              About
            </NavLink>
          </li>
          <li className="inline-block mr-5 ">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-slate-50" : "text-slate-500"
              }
            >
              Contact
            </NavLink>{" "}
          </li>
          <li className="inline-block mr-5 ">
            <NavLink
              to="/registration-form"
              className={({ isActive }) =>
                isActive ? "text-slate-50" : "text-slate-500"
              }
            >
              Register
            </NavLink>
          </li>

          {
            isAuthenticated && (
              <li className="inline-block mr-5 ">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-slate-50" : "text-slate-500"
                  }
                >
                  Admin Dashboard
                </NavLink>
              </li>
            )
          }

          {
            isAuthenticated ? (
              <li className="inline-block mr-5 ">
                <button onClick={handleLogout}> 
                  Logout  
                </button> 
              </li>
            ): (
              <li className="inline-block mr-5 ">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-slate-50" : "text-slate-500"
                }
              >
                Login
              </NavLink>
            </li>
            )
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
