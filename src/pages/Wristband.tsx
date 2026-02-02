import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { MobileButton } from "@/components/MobileButton";

export default function Wristband() {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleUpload = () => {
    // Create a file input and trigger it
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Create a preview URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setUploaded(true);
      }
    };
    input.click();
  };

  const handleContinue = () => {
    navigate("/consent");
  };

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Upload Workouts"
        subtitle="Track your activities by uploading screenshots"
      />

      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <div className="p-5 rounded-2xl bg-secondary mb-6">
            <h3 className="font-semibold text-foreground mb-2">How it works</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You can upload a screenshot of your workout from any fitness app 
              (MI Fitness, Fitbit, Samsung Health, etc.). We'll analyze the data 
              and reward you with HEBI points!
            </p>
          </div>

          {!uploaded ? (
            <button
              onClick={handleUpload}
              className="w-full p-8 border-2 border-dashed border-input-border rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-secondary/50 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <svg className="w-7 h-7 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">Upload screenshot</p>
                <p className="text-sm text-muted-foreground">Tap to select an image</p>
              </div>
            </button>
          ) : (
            <div className="space-y-4">
              {previewUrl && (
                <div className="relative rounded-2xl overflow-hidden bg-secondary">
                  <img 
                    src={previewUrl} 
                    alt="Workout screenshot" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                      <svg className="w-5 h-5 text-success-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-4 rounded-xl bg-success-light border border-success/20">
                <p className="text-sm font-medium text-success">
                  ✓ Screenshot uploaded successfully!
                </p>
              </div>

              <button
                onClick={handleUpload}
                className="w-full py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Upload a different image
              </button>
            </div>
          )}
        </div>

        <div className="pt-8">
          <MobileButton onClick={handleContinue} disabled={!uploaded}>
            Continue
          </MobileButton>
        </div>
      </div>
    </div>
  );
}
