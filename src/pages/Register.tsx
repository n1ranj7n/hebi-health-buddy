import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { NumberedInput } from "@/components/NumberedInput";
import { MobileButton } from "@/components/MobileButton";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock success - navigate to OTP
    navigate("/otp");
  };

  const isValid = formData.firstName.trim() && formData.lastName.trim();

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Create Account"
        subtitle="Join HEBI and start earning rewards for staying healthy"
      />

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-5 flex-1">
          <NumberedInput
            number={1}
            label="First name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            required
          />
          
          <NumberedInput
            number={2}
            label="Last name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            required
          />
          
          <NumberedInput
            number={3}
            label="Email (optional)"
            placeholder="Enter your email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          
          <NumberedInput
            number={4}
            label="Mobile number (optional)"
            placeholder="Enter your mobile number"
            type="tel"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
          />
        </div>

        <div className="pt-8">
          <MobileButton type="submit" disabled={!isValid}>
            Create account
          </MobileButton>
          
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-foreground font-medium underline underline-offset-2"
            >
              Sign in
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
