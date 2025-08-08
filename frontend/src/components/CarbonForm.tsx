// frontend/src/components/CarbonForm.tsx
// --- MODIFIED FILE ---
// The form now calls onNewEntry AFTER the fetch is successful.

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CarbonFormProps {
  token: string | null;
  onNewEntry: () => Promise<void>; // Changed to a promise to allow waiting
}

const CarbonForm: React.FC<CarbonFormProps> = ({ token, onNewEntry }) => {
  const [electricity, setElectricity] = useState('');
  const [transport, setTransport] = useState('none');
  const [distance, setDistance] = useState('');
  const [food, setFood] = useState('none');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!token) {
      setError("You are not logged in.");
      return;
    }

    try {
      const today = new Date().toISOString().split('T')[0];
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/carbon/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          entry_date: today,
          electricity_kwh: parseFloat(electricity) || 0,
          transport_mode: transport,
          distance_km: parseFloat(distance) || 0,
          food_choice: food
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit entry.');
      }
      
      setSuccess('Entry added successfully!');
      setElectricity('');
      setTransport('none');
      setDistance('');
      setFood('none');
      
      // Await the onNewEntry function to ensure data is fetched after submission
      await onNewEntry(); 

      setTimeout(() => setSuccess(''), 3000);

    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-2xl font-bold">Log Today's Activity</h2>
      {error && <p className="mb-4 text-center text-red-500">{error}</p>}
      {success && <p className="mb-4 text-center text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="electricity">Electricity (kWh)</Label>
          <Input id="electricity" type="number" step="0.1" value={electricity} onChange={(e) => setElectricity(e.target.value)} placeholder="e.g., 12.5" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="transport">Transportation</Label>
          <Select value={transport} onValueChange={setTransport}>
            <SelectTrigger id="transport"><SelectValue placeholder="Select transport type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No travel</SelectItem>
              <SelectItem value="petrol_car">Petrol Car</SelectItem>
              <SelectItem value="electric_car">Electric Car</SelectItem>
              <SelectItem value="motorcycle">Motorcycle</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
              <SelectItem value="train">Train</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="distance">Distance (km)</Label>
          <Input id="distance" type="number" step="0.1" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="e.g., 50" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="food">Main Meal Today</Label>
          <Select value={food} onValueChange={setFood}>
            <SelectTrigger id="food"><SelectValue placeholder="Select a meal type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No main meal / Snacks</SelectItem>
              <SelectItem value="beef">Beef</SelectItem>
              <SelectItem value="pork">Pork</SelectItem>
              <SelectItem value="chicken">Chicken</SelectItem>
              <SelectItem value="fish">Fish</SelectItem>
              <SelectItem value="plant_based">Plant-based Protein</SelectItem>
              <SelectItem value="vegetables_grains">Vegetables & Grains</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">Add Entry</Button>
      </form>
    </div>
  );
};

export default CarbonForm;
