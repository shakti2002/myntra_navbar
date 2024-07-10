import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Popup from './Popup';

const JoinPage = () => {
  const { section } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the login/signup popup when the page loads
    setShowPopup(true);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Join the {section} Forum</h1>
      <p>Here you can join the {section} forum based on your interest.</p>
      {showPopup && <Popup onClose={handlePopupClose} />}
    </div>
  );
};

export default JoinPage;
