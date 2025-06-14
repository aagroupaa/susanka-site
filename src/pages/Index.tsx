import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { PremiumCard } from "../components/PremiumCard";
import { MainFeed } from "../components/MainFeed";
import { RightPanel } from "../components/RightPanel";
import LoginPage from "../pages/LoginPage";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="flex max-w-7xl mx-auto pt-6 px-4 gap-4">
              <aside className="w-1/4 space-y-4">
                <PremiumCard />
                <Sidebar />
              </aside>
              <section className="w-1/2">
                <MainFeed />
              </section>
              <aside className="w-1/4 space-y-4">
                <RightPanel />
              </aside>
            </main>
          </div>
        }
      />
    </Routes>
  );
}
