import React, { useState } from "react";
import { MobileButton } from "@/components/MobileButton";

// Mock data
const mockWorkouts = [
  { id: 1, date: "Today", type: "Running", duration: "32 min", calories: 320, points: 45 },
  { id: 2, date: "Yesterday", type: "Walking", duration: "45 min", calories: 180, points: 30 },
  { id: 3, date: "Jan 30", type: "Cycling", duration: "28 min", calories: 250, points: 35 },
];

const mockStats = {
  todaySteps: 8432,
  todayCalories: 420,
  totalPoints: 1250,
  weeklyStreak: 5,
};

export default function Dashboard() {
  const [workouts, setWorkouts] = useState(mockWorkouts);

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Mock adding a new workout
        const newWorkout = {
          id: Date.now(),
          date: "Just now",
          type: "Workout",
          duration: "-- min",
          calories: 0,
          points: 25,
        };
        setWorkouts([newWorkout, ...workouts]);
      }
    };
    input.click();
  };

  return (
    <div className="mobile-screen safe-top safe-bottom">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-muted-foreground text-sm">Good morning</p>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-semibold text-sm">JD</span>
        </div>
      </div>

      {/* Points Card */}
      <div className="p-6 rounded-2xl bg-primary text-primary-foreground mb-6">
        <p className="text-sm opacity-80 mb-1">Total Points Earned</p>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">{mockStats.totalPoints.toLocaleString()}</span>
          <span className="text-sm opacity-80 mb-1">HEBI points</span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xs">🔥</span>
          </div>
          <span className="text-sm">{mockStats.weeklyStreak} day streak! Keep it up!</span>
        </div>
      </div>

      {/* Today's Activity */}
      <h2 className="font-semibold text-foreground mb-3">Today's Activity</h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="stat-card">
          <p className="text-xs text-muted-foreground mb-1">Steps</p>
          <p className="text-xl font-bold text-foreground">{mockStats.todaySteps.toLocaleString()}</p>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-success rounded-full" 
              style={{ width: `${Math.min(100, (mockStats.todaySteps / 10000) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">Goal: 10,000</p>
        </div>
        
        <div className="stat-card">
          <p className="text-xs text-muted-foreground mb-1">Calories Burned</p>
          <p className="text-xl font-bold text-foreground">{mockStats.todayCalories}</p>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-warning rounded-full" 
              style={{ width: `${Math.min(100, (mockStats.todayCalories / 500) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">Goal: 500</p>
        </div>
      </div>

      {/* Uploaded Workouts */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-foreground">Uploaded Workouts</h2>
        <span className="text-xs text-muted-foreground">{workouts.length} total</span>
      </div>
      
      <div className="space-y-3 mb-6 flex-1 overflow-auto">
        {workouts.map((workout) => (
          <div key={workout.id} className="workout-item">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <span className="text-lg">
                {workout.type === "Running" ? "🏃" : workout.type === "Walking" ? "🚶" : workout.type === "Cycling" ? "🚴" : "💪"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground truncate">{workout.type}</p>
                <span className="text-xs text-muted-foreground">{workout.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {workout.duration} • {workout.calories} cal
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-success">+{workout.points}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Button */}
      <div className="pt-4">
        <MobileButton onClick={handleUpload}>
          Upload new workout screenshot
        </MobileButton>
      </div>
    </div>
  );
}
