import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 min-h-screen bg-indigo-100">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent bg-transparent">
        Settings
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter new password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={()=>navigate('/')}
          >
            Save Changes
          </button>
        </form>
      </div>
      <footer className="mt-10 flex justify-center items-center py-4 bg- text-gray-800">
        Made by{" "}
        <div className="ml-1 font-semibold hover:underline">@FireAI</div>
      </footer>
    </div>
  );
};

export default SettingsPage;
