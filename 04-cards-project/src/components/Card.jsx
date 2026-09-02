import React from "react";
import { Bookmark } from "lucide-react";
const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZciLmZ88o0cLKtDAqEAvqA1fHAYVb2MXxcJl_VOLRqw&s=10"
            alt="nachioooooo"
          />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Engineer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
