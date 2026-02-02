import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenHeader } from "@/components/ScreenHeader";
import { MobileButton } from "@/components/MobileButton";
import { cn } from "@/lib/utils";

const MOCK_OTP = "123456";

export default function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;
    
    const newOtp = [...otp];
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    
    if (enteredOtp === MOCK_OTP) {
      navigate("/profile");
    } else {
      setError("Invalid code. Please try again.");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="mobile-screen safe-top safe-bottom">
      <ScreenHeader
        title="Verify your number"
        subtitle="Enter the 6-digit code we sent to your phone"
      />

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex justify-center gap-3 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={cn(
                  "w-12 h-14 text-center text-xl font-semibold rounded-xl border-2 bg-input transition-all focus:outline-none focus:ring-2 focus:ring-ring",
                  error ? "border-destructive" : "border-input-border"
                )}
              />
            ))}
          </div>

          {error && (
            <p className="text-center text-sm text-destructive mb-4">{error}</p>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Hint: Use code <span className="font-mono font-semibold">123456</span>
          </p>
        </div>

        <div className="pt-8">
          <MobileButton type="submit" disabled={!isComplete}>
            Verify
          </MobileButton>
          
          <button
            type="button"
            className="w-full mt-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Didn't receive a code? Resend
          </button>
        </div>
      </form>
    </div>
  );
}
