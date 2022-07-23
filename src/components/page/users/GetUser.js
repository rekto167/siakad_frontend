import { Link } from "react-router-dom";

const GetUser = () => {
  return (
    <div className="container mx-auto w-4/5 mt-5">
      <Link
        to="/users"
        className="p-2 bg-slate-400 rounded text-white font-semibold"
      >
        Kembali
      </Link>
      <div className="container mt-3">
        <h3 className="text-center font-semibold text-3xl">User Detail</h3>
        <div className="container border rounded px-2 py-5 mt-2">
          <div>
            <Link
              to="/users"
              className="p-2 bg-red-500 rounded border text-white"
            >
              Hapus
            </Link>
            <Link
              to="/users"
              className="p-2 bg-green-500 rounded border text-white"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUser;
