import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "./App.css";
import UserContext from "./Context/UserContext";
const UserMumbai = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Mumbai</h3>
        <button onClick={()=>setUser({city:"Mumbai"})}>
          update from mumbai</button>
      </div>
    </>
  );
};

const UserBangloar = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Bangloar</h3>
        <button onClick={()=>setUser({city:"Bangloar"})}>
          update from Bangloar</button>
      </div>
      <UserMumbai />
    </>
  );
};

const UserLucknow = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Lucknow</h3>
        <button onClick={()=>setUser({city:"Lucknow"})}>
          update from Lucknow</button>
      </div>
      <UserBangloar />
    </>
  );
};
const App = () => {
  const [user, setUser] = useState({ city: "Hyderabad" });
  return (
    <>
      <main style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        {/* <UserMumbai />
      <UserBangloar /> */}
        <h1>{user.city}</h1>
        <UserContext.Provider value={setUser}>
          <UserLucknow />
        </UserContext.Provider>
        <button onClick={()=>setUser({city:"Hyderabad"})}>
          Reset</button>
      </main>
    </>
  );
};

// Named Export
export default App;
