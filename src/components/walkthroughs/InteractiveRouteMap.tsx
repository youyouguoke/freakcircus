"use client";

export default function InteractiveRouteMap() {
  return (
    <section id="branch-map" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Route Relationship Map
        </h2>
        <div className="bg-surface-container border border-outline/20 p-8">
          <svg viewBox="0 0 600 400" className="w-full h-auto">
            {/* Nodes */}
            <circle cx="300" cy="50" r="30" fill="#7A1E1E" opacity="0.8" />
            <text x="300" y="55" textAnchor="middle" fill="#F5F1E8" fontSize="12" fontFamily="JetBrains Mono">START</text>
            
            <circle cx="150" cy="150" r="25" fill="#1E4D2B" opacity="0.8" />
            <text x="150" y="155" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="JetBrains Mono">Pierrot</text>
            
            <circle cx="300" cy="150" r="25" fill="#B8860B" opacity="0.8" />
            <text x="300" y="155" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="JetBrains Mono">Harlequin</text>
            
            <circle cx="450" cy="150" r="25" fill="#5A8A8A" opacity="0.8" />
            <text x="450" y="155" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="JetBrains Mono">Doctor</text>
            
            <circle cx="225" cy="250" r="25" fill="#A090A8" opacity="0.8" />
            <text x="225" y="255" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="JetBrains Mono">Columbina</text>
            
            <circle cx="375" cy="250" r="25" fill="#8B2635" opacity="0.8" />
            <text x="375" y="255" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="JetBrains Mono">Silent</text>
            
            <circle cx="300" cy="350" r="30" fill="#0B0A0F" stroke="#7A1E1E" strokeWidth="2" />
            <text x="300" y="355" textAnchor="middle" fill="#F5F1E8" fontSize="12" fontFamily="JetBrains Mono">NULL</text>
            
            {/* Connections */}
            <line x1="300" y1="80" x2="150" y2="125" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="300" y1="80" x2="300" y2="125" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="300" y1="80" x2="450" y2="125" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="150" y1="175" x2="225" y2="225" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="300" y1="175" x2="225" y2="225" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="300" y1="175" x2="375" y2="225" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="450" y1="175" x2="375" y2="225" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="225" y1="275" x2="300" y2="320" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
            <line x1="375" y1="275" x2="300" y2="320" stroke="#7A1E1E" strokeWidth="1" opacity="0.5" />
          </svg>
          <div className="mt-4 text-on-surface-variant text-sm">
            <p>Route Relationship Analysis: All routes converge at the Null Route. Completion of multiple routes unlocks hidden connections.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
