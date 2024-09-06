export const Header = () => {
  return (
    <>
      <div className="navbar bg-BLACK">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Tax</a>
              </li>
              <li>
                <a>Vote</a>
              </li>
              <li>
                <a>Budget</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-white tracking-widest">Bishtaar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Tax</a>
            </li>
            <li>
              <a>Vote</a>
            </li>
            <li>
              <a>Budget</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-8 mr-2">
          <a href="/login">Login</a>
          <a href="/" className="btn text-white btn-neutral">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};
