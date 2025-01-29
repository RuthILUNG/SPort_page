"use client";

import React from "react";
import { Sport } from "../types";

interface Props {
  sports: Sport[];
  onDeleteSport: (id: number) => void;
  onUpdateSport: (sport: Sport) => void;
}

const SportsList: React.FC<Props> = ({ sports, onDeleteSport, onUpdateSport }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sports.map((sport) => (
        <div key={sport.id} className="bg-white shadow-md rounded-lg p-4">
          <img src={sport.image} alt={sport.name} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-xl font-bold mt-2">{sport.name}</h3>
          <p className="text-gray-600">Type: {sport.type_of_sport}</p>
          <div className="mt-3 flex gap-2">
            <button 
              onClick={() => onDeleteSport(sport.id)} 
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
            <button 
              onClick={() => {
                const newName = prompt("Enter new name:", sport.name);
                if (newName) {
                  onUpdateSport({ ...sport, name: newName });
                }
              }} 
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsList;
