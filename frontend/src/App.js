import React from 'react';
import SlotList from './components/SlotList';
import AddSlotForm from './components/AddSlotForm';

function App() {
  return (
    <div>
      <h1>Guitar Class Slots</h1>
      <AddSlotForm />
      <SlotList />
    </div>
  );
}

export default App;
