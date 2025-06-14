import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center">
      <div className="space-y-4 max-w-md w-full p-6 border rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold">Welcome to Susanka</h1>
        <p className="text-sm text-gray-500">Login coming soon. This is a placeholder screen.</p>
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
