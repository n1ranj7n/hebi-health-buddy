import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { MobileButton } from "@/components/MobileButton";
import { cn } from "@/lib/utils";

export default function Consent() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    navigate("/dashboard");
  };

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Almost there!"
        subtitle="Please review and accept our data usage policy"
      />

      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <div className="p-5 rounded-2xl bg-secondary mb-6">
            <h3 className="font-semibold text-foreground mb-3">What we do with your data</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-success">✓</span>
                <span>Analyze workout screenshots to verify activity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success">✓</span>
                <span>Calculate HEBI points based on your activities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success">✓</span>
                <span>Provide personalized health insights</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">✗</span>
                <span>We never share your data with third parties</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setAgreed(!agreed)}
            className="w-full flex items-start gap-4 p-4 rounded-xl border border-input-border hover:bg-secondary/50 transition-all"
          >
            <div
              className={cn(
                "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all shrink-0 mt-0.5",
                agreed 
                  ? "bg-primary border-primary" 
                  : "border-input-border"
              )}
            >
              {agreed && (
                <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-foreground text-left">
              I allow HEBI to analyze my workout screenshots to calculate my health rewards and provide personalized insights.
            </span>
          </button>
        </div>

        <div className="pt-8">
          <MobileButton onClick={handleContinue} disabled={!agreed}>
            Accept & continue
          </MobileButton>
          
          <p className="mt-4 text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <button className="underline underline-offset-2">Terms of Service</button>
            {" "}and{" "}
            <button className="underline underline-offset-2">Privacy Policy</button>
          </p>
        </div>
      </div>
    </div>
  );
}
