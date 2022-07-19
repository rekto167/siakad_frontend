import { Link } from "react-router-dom";

const UserDeactive = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-red-500 font-semibold text-3xl">ERROR</h1>
        <span className="text-red-400 font-bold text-4xl">403</span>
      </div>
      <div className="mx-auto flex flex-col">
        <h3 className="text-center font-bold text-lg mt-5">
          Akun anda belum aktif <br /> Silahkan hubungi admin
        </h3>
        <Link
          to="/login"
          className="bg-cyan-400 text-center py-3 px-5 text-white hover:bg-cyan-600 rounded w-fit mx-auto mt-5"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default UserDeactive;
