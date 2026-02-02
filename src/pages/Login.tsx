import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { NumberedInput } from "@/components/NumberedInput";
import { MobileButton } from "@/components/MobileButton";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock success - navigate to dashboard
    navigate("/dashboard");
  };

  const isValid = formData.email.trim() && formData.password.trim();

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Welcome back"
        subtitle="Sign in to continue earning health rewards"
      />

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-5 flex-1">
          <NumberedInput
            number={1}
            label="Email or mobile"
            placeholder="Enter your email or mobile"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
          
          <NumberedInput
            number={2}
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
          />
        </div>

        <div className="pt-8">
          <MobileButton type="submit" disabled={!isValid}>
            Sign in
          </MobileButton>
          
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-foreground font-medium underline underline-offset-2"
            >
              Create account
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
