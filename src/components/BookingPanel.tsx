"use client";

export default function BookingPanel() {
  return (
    <aside className="absolute top-0 right-0 w-[300px] pb-7 pt-6 px-7 flex flex-col z-50 pointer-events-auto bg-gradient-to-r from-[#81e047] to-[#d8fa72] rounded-bl-[28px] shadow-2xl">
      {/* Decorative sparkle top right */}
      <div className="absolute top-6 right-6 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="black"/>
        </svg>
      </div>

      <h2 className="text-black font-heading font-medium text-[28px] leading-[1.05] tracking-[-0.04em] mb-6 pr-4">
        Ready to claim<br />your room?
      </h2>

      <form className="flex flex-col gap-3.5 font-body" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-[10px] tracking-tight">Full name</label>
            <input 
              type="text" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-[10px] tracking-tight">Phone Number</label>
            <input 
              type="tel" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-[10px] tracking-tight">Email Address</label>
            <input 
              type="email" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label className="text-black text-[10px] tracking-tight">Requirement</label>
            <select 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none appearance-none"
            >
              <option value=""></option>
              <option value="seat">Seat</option>
              <option value="tour">Tour</option>
            </select>
            {/* Custom Green Chevron */}
            <div className="absolute right-2.5 top-[23px] pointer-events-none">
              <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#81e047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-black text-[10px] tracking-tight">Message</label>
          <textarea 
            rows={2}
            className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none resize-none h-[46px]"
          />
        </div>

        <div className="flex justify-center mt-3">
          <button 
            type="button"
            onClick={() => {}}
            className="w-[140px] border-[1.5px] border-black bg-transparent text-black rounded-full py-1.5 text-[11px] hover:bg-black hover:text-[#d8fa72] transition-colors font-body"
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
}
