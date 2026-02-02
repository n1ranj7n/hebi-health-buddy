import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { NumberedInput } from "@/components/NumberedInput";
import { MobileButton } from "@/components/MobileButton";

export default function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nationality: "",
    occupation: "",
    maritalStatus: "",
    height: "",
    weight: "",
    state: "",
    city: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/plan");
  };

  const isValid = Object.values(formData).every((v) => v.trim());

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Complete your profile"
        subtitle="Help us personalize your health insurance experience"
      />

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-5 flex-1">
          <NumberedInput
            number={1}
            label="Nationality"
            placeholder="e.g., Indian"
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            required
          />
          
          <NumberedInput
            number={2}
            label="Occupation"
            placeholder="e.g., Software Engineer"
            value={formData.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            required
          />
          
          <NumberedInput
            number={3}
            label="Marital status"
            placeholder="e.g., Single, Married"
            value={formData.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <NumberedInput
              number={4}
              label="Height (cm)"
              placeholder="170"
              type="number"
              value={formData.height}
              onChange={(e) => handleChange("height", e.target.value)}
              required
            />
            
            <NumberedInput
              number={5}
              label="Weight (kg)"
              placeholder="70"
              type="number"
              value={formData.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
              required
            />
          </div>
          
          <NumberedInput
            number={6}
            label="State"
            placeholder="e.g., Maharashtra"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            required
          />
          
          <NumberedInput
            number={7}
            label="City"
            placeholder="e.g., Mumbai"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            required
          />
        </div>

        <div className="pt-8">
          <MobileButton type="submit" disabled={!isValid}>
            Continue
          </MobileButton>
        </div>
      </form>
    </div>
  );
}
