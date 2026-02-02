import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { MobileButton } from "@/components/MobileButton";
import { cn } from "@/lib/utils";

type PlanOption = "apple" | "android" | "other";

interface PlanCardProps {
  title: string;
  description: string;
  disabled?: boolean;
  selected?: boolean;
  badge?: string;
  onClick?: () => void;
}

function PlanCard({ title, description, disabled, selected, badge, onClick }: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "plan-card text-left w-full",
        disabled ? "plan-card-disabled" : "plan-card-enabled",
        selected && "plan-card-selected"
      )}
    >
      {badge && (
        <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
          {badge}
        </span>
      )}
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {selected && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm font-medium text-foreground">Selected</span>
        </div>
      )}
    </button>
  );
}

export default function Plan() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<PlanOption | null>(null);

  const handleContinue = () => {
    if (selected === "other") {
      navigate("/wristband");
    }
  };

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Choose your device"
        subtitle="Select how you'll track your health activities"
      />

      <div className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <PlanCard
            title="Apple Watch"
            description="Sync automatically with Apple Health"
            disabled
            badge="Coming soon"
          />
          
          <PlanCard
            title="Android Watch"
            description="Sync with Google Fit or Samsung Health"
            disabled
            badge="Coming soon"
          />
          
          <PlanCard
            title="Other Wristband"
            description="Upload screenshots from any fitness app (MI Fitness, Fitbit, etc.)"
            selected={selected === "other"}
            onClick={() => setSelected("other")}
          />
        </div>

        <div className="pt-8">
          <MobileButton onClick={handleContinue} disabled={selected !== "other"}>
            Continue
          </MobileButton>
        </div>
      </div>
    </div>
  );
}
