"use client";

import React, { useState } from "react";
import { Sport } from "../types";

interface Props {
  onAddSport: (sport: Sport) => void;
}

const SportForm: React.FC<Props> = ({ onAddSport }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("Individual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image) return;

    const newSport: Sport = {
      id: Date.now(),
      name,
      image,
      type_of_sport: type,
    };

    onAddSport(newSport);
    setName("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 shadow rounded-md mb-6">
      <div className="grid gap-3">
        <input
          type="text"
          placeholder="Sport Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
        <select 
          value={type} 
          onChange={(e) => setType(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="Individual">Individual</option>
          <option value="Team">Team</option>
        </select>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
          Add Sport
        </button>
      </div>
    </form>
  );
};

export default SportForm;
