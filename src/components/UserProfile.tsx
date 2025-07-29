// src/UserProfile.tsx
import React from 'react';

// --- 1. Define the shape of your component's props using an interface ---
interface UserProfileProps {
  name: string;
  age: number;
  email?: string; // The '?' makes the 'email' prop optional
  onEditClick: (userId: number) => void; // A function prop that takes a number and returns void
  isPremiumUser: boolean;
  children?: React.ReactNode;
}

// --- 2. Type your functional component using React.FC (or just direct typing) ---
// React.FC<T> is a generic type provided by React for functional components.
// It implicitly includes 'children' if you need it, but you can also add it explicitly.
const UserProfile: React.FC<UserProfileProps> = (props) => {
  // You can destructure props for cleaner access
  const { name, age, email, onEditClick, isPremiumUser, children } = props;

  const handleEdit = () => {
    // In a real app, you'd get the actual user ID. For this example, let's use age as a placeholder ID.
    onEditClick(age);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {/* Only display email if it's provided */}
      {email && <p>Email: {email}</p>}
      <p>{isPremiumUser ? 'Premium Member' : 'Standard Member'}</p>
      <button onClick={handleEdit}>Edit Profile</button>
       {children && <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #eee' }}>{children}</div>} {/* <--- Render children */}
    </div>
  );
};

export default UserProfile;