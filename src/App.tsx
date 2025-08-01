import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import RefExample from './components/RefExample';
import EventHandlerForm from './eventHandlers/EventHandlerForm';
import CustomHookExample from './components/CustomHookComponent';

function App() {
   const [count, setCount] = useState(0);

   const handleEdit = (id: number) => {
      alert(`editing user id:${id}`);
      console.log(`edit request for user id ${id}`);
   };

   return (
      <>
         <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <a href="https://vite.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <CustomHookExample />
         
         <h1>My User Directory</h1>
         <UserProfile
            name="Alice Johnson"
            age={30}
            email="alice@example.com"
            onEditClick={handleEdit}
            isPremiumUser={true}
         >
            {/* These are the children */}
            <p>**Additional Info for Alice**</p>
            <ul>
               <li>Loves hiking</li>
               <li>Joined on 2022-01-15</li>
            </ul>
         </UserProfile>
         <UserProfile
            name="Bob Williams"
            age={24}
            onEditClick={handleEdit}
            isPremiumUser={false}
         />
         <Counter initialCount={10} />
         <Counter /> {/* Uses default initialCount of 0 */}
           <RefExample />

           <EventHandlerForm />




         <hr></hr>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </>
   );
}

export default App;
