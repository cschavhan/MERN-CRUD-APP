import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center flex-col h-[89vh] w-full bg-gray-800">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        403
      </h1>

      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Access denied
      </div>

      <button onClick={() => navigate(-1)} className="mt-5">
        <span className=" relative block  border border-current px-8 py-3  text-lg font-semibold bg-yellow-600 hover:bg-yellow-400 hover:text-black rounded-sm">
          Go Back
        </span>
      </button>
    </main>
  );
}

export default ErrorPage;
