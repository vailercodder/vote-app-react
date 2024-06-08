import React from "react";
import Navbar from "../../common/Navbar";
import "./VotePage.css";
import { useNavigation } from "../../../services/navigationContext";
import { submitVote } from "../../../services/api";

const candidates = ["Homelander", "Starlight", "The Deep", "A-Train"];

const VotePage = () => {
  const { username } = useNavigation();

  const handleVote = async (candidate) => {
    const voteData = {
      userId: username,
      candidate,
    };

    try {
      await submitVote(voteData);
      alert(`Vote for ${candidate} submitted successfully!`);
    } catch (error) {
      console.error("Error submitting vote:", error);
      alert("Failed to submit vote. Please try again.");
    }
  };

  return (
    <div className="vote-page">
      <Navbar username={username} />
      <div className="candidates">
        {candidates.map((candidate) => (
          <div key={candidate} className="candidate">
            {candidate}
            <button onClick={() => handleVote(candidate)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotePage;
