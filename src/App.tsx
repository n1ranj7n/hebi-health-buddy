import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Profile from "./pages/Profile";
import Plan from "./pages/Plan";
import Wristband from "./pages/Wristband";
import Consent from "./pages/Consent";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Index />} />
          
          {/* Auth flow */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          
          {/* Onboarding flow */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/wristband" element={<Wristband />} />
          <Route path="/consent" element={<Consent />} />
          
          {/* Main app */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
