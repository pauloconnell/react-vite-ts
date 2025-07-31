// src/EventHandlerExamples.tsx
import React, { useState } from 'react';

const EventHandlerForm: React.FC = () => {
  // State for input values
  const [textInput, setTextInput] = useState('');
  const [selectValue, setSelectValue] = useState('option1');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // State for form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- 1. Typing ChangeEvent for different input types ---

  // For a text input (HTMLInputElement)
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
    console.log('Text input value:', e.target.value);
  };

  // For a select dropdown (HTMLSelectElement)
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    console.log('Select value:', e.target.value);
  };

  // For a checkbox (HTMLInputElement - yes, checkboxes are also HTMLInputElement!)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked); // For checkboxes, use .checked
    console.log('Checkbox checked:', e.target.checked);
  };

  // For a textarea (HTMLTextAreaElement)
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Textarea value:', e.target.value);
    // You'd typically update state here too
  };


  // --- 2. Typing MouseEvent ---

  // For a generic click on a button (HTMLButtonElement)
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!', e.currentTarget.textContent);
    console.log('Click coordinates:', e.clientX, e.clientY);
  };

  // For a mouse enter/leave on a div (HTMLDivElement)
  const handleMouseEnterDiv = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse entered div!');
    e.currentTarget.style.backgroundColor = '#e0ffe0';
  };

  const handleMouseLeaveDiv = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse left div!');
    e.currentTarget.style.backgroundColor = 'transparent';
  };

//   const handleScrollEvent = (e: React.MouseEvent<HTMLElement>) => {
//     console.log('Scroll event:', e.currentTarget.scrollTop);
//   }

  // --- 3. Typing KeyboardEvent ---

  // For a key press on an input (HTMLInputElement)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('Key pressed:', e.key);
    if (e.key === 'Enter') {
      alert(`You pressed Enter! Input value: ${e.currentTarget.value}`);
    }
  };

  // For a key press on a div (HTMLDivElement)
  const handleDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      console.log('Key down on div:', e.key);
  };


  // --- 4. Typing FormEvent ---

  // For form submission (FormEvent)
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser form submission
    setFormSubmitted(true);
    console.log('Form submitted!');
    console.log('Final text input:', textInput);
    console.log('Final select value:', selectValue);
    console.log('Final checkbox checked:', checkboxChecked);

    // In a real app, you'd send this data to a server
  };


  return (
    <div style={{ border: '1px solid #007BFF', padding: '25px', margin: '20px', borderRadius: '10px', backgroundColor: '#f0f8ff' }}>
      <h2>Event Handler Typing Examples</h2>

      <h3>Change Events</h3>
      <div>
        <label>
          Text Input:
          <input
            type="text"
            value={textInput}
            onChange={handleTextInputChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <p>Current text: {textInput}</p>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label>
          Select Option:
          <select value={selectValue} onChange={handleSelectChange} style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <p>Selected: {selectValue}</p>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
          />
          Check me
        </label>
        <p>Checkbox: {checkboxChecked ? 'Checked' : 'Unchecked'}</p>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label>
          Text Area:
          <textarea
            onChange={handleTextAreaChange}
            rows={3}
            cols={30}
            placeholder="Type in textarea"
            style={{ marginLeft: '10px', padding: '5px' }}
          ></textarea>
        </label>
      </div>

      <h3 style={{ marginTop: '30px' }}>Mouse Events</h3>
      <button onClick={handleButtonClick} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Click for MouseEvent
      </button>
      <div
        onMouseEnter={handleMouseEnterDiv}
        onMouseLeave={handleMouseLeaveDiv}
        style={{ marginTop: '15px', padding: '20px', border: '1px dashed #007BFF', width: '200px', textAlign: 'center' }}
      >
        Hover over this Div
      </div>

      <h3 style={{ marginTop: '30px' }}>Keyboard Events</h3>
      <div>
        <label>
          Type in Input (and press Enter):
          <input
            type="text"
            onKeyDown={handleKeyDown}
            placeholder="Press Enter"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
      <div
        tabIndex={0} // Makes the div focusable
        onKeyDown={handleDivKeyDown}
        style={{ marginTop: '15px', padding: '20px', border: '1px dashed #007BFF', width: '200px', textAlign: 'center' }}
      >
        Click me then type (Div)
      </div>

      <h3 style={{ marginTop: '30px' }}>Form Submission Event</h3>
      <form onSubmit={handleFormSubmit} style={{ border: '1px solid #FFC107', padding: '20px', borderRadius: '8px' }}>
        <p>This form uses `onSubmit` and `e.preventDefault()`.</p>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FFC107', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit Form
        </button>
        {formSubmitted && <p style={{ color: 'green', fontWeight: 'bold' }}>Form Submitted!</p>}
      </form>
    </div>
  );
};

export default EventHandlerForm;