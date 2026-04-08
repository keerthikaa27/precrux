import { useState } from "react";
import BookingModal from "./BookingModal";
export default function FloatingCTA({ top }: { top: number }) {
  const [open, setOpen] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
  

  return (
    <>
      <div
        className="absolute right-[-80px] hidden lg:block"
        style={{
          top: `${top}px`,
          transform: "translateY(-50%)",
        }}
      >
        <button
  onClick={() => setShowBooking(true)}
  className="bg-[#0f1117] text-[#C8F135] p-4 rounded-2xl shadow-lg 
             hover:bg-[#C8F135] hover:text-[#0f1117] transition-all duration-300"
  style={{
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    letterSpacing: "0.05em",
    fontWeight: 500,
    
  }}
>
  See what’s blocking growth
</button>

      </div>

       {/* Modal */}
      {showBooking && (
              <BookingModal
                onClose={() => setShowBooking(false)}
              />
            )}
    </>
  );
}

     
   