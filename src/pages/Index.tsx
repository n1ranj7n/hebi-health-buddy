import React from "react";
import { useNavigate } from "react-router-dom";
import { MobileButton } from "@/components/MobileButton";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen safe-top safe-bottom justify-center">
      {/* Logo/Brand */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-primary-foreground">H</span>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground text-center mb-2">
          HEBI
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-2">
          Health Earn-Back Insurance
        </p>
        <p className="text-sm text-muted-foreground text-center max-w-xs">
          Get rewarded for staying healthy. Track your workouts and earn points toward your insurance premium.
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <MobileButton onClick={() => navigate("/register")}>
          Get started
        </MobileButton>
        
        <MobileButton variant="outline" onClick={() => navigate("/login")}>
          I already have an account
        </MobileButton>
      </div>
    </div>
  );
}
