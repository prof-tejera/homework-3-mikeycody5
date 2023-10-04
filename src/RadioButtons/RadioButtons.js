import Button from 'components/Button/Button';
import React, { useState } from 'react';
import Panel from 'components/Panel/Panel';
import './RadioButtons.css';

const RadioButtons = ({ onChange }) => {
  const options = ['Map', 'Search', 'List'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
      setSelectedOption(option);
      if (onChange) onChange(option);
  };

  return (
      <Panel backgroundColor="gray">
          <div className="radio-buttons">
              {options.map((option, index) => (
                  <div key={index} className="radio-button-container">
                      <input 
                          type="radio" 
                          name="radio-group" 
                          value={option} 
                          id={`radio-${option}`}
                          checked={selectedOption === option}
                          onChange={() => handleOptionChange(option)}
                          style={{ display: "none" }} 
                      />
                      <label htmlFor={`radio-${option}`}>
                          <Button 
                              text={option}
                              onClick={() => handleOptionChange(option)}
                              active={selectedOption === option}
                          />
                      </label>
                  </div>
              ))}
          </div>
      </Panel>
  );
};

export default RadioButtons;