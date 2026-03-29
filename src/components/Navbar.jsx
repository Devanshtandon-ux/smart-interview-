import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        AI Interview Prep
      </h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/interview">Interview</Link>
      </div>

    </div>
  );
}

export default Navbar;