import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students = [
    {name: "Preetom Saha Arko", cgpa: 4.00},
    {name: "Sakshar Chakravarty", cgpa: 3.995},
    {name: "Tareq Mahmood", cgpa: 3.99}
  ]

  const nayoks = ['shakib', 'alomgir', 'shuvo', 'manna', 'chanchal']
  const style = {
    borderRadius: '10px',
    backgroundColor: 'cyan',
    color: 'black'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a react person.
        </p>
        <Counter></Counter>
        <User></User>
        {
          students.map(stu => <Person student={stu}></Person>)
        }
        {
          nayoks.map(nayok => <li>{nayok}</li> )
        }
        
      </header>
    </div>
    
  );
}

function Counter()
{
  const [count, setCount] = useState(0);
  const increaseHandler = () => setCount(count+1);
  const decreaseHandler = () => {
    if(count > 0)setCount(count-1);

  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={increaseHandler}>Increase</button> 
      <button onClick={decreaseHandler}>Decrease</button> 
    </div>
  );
}

function User()
{
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  console.log(users);
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      
      <ul>
        {
          users.map(user => <li>{user.name} : {user.email}</li> )
        }
      </ul>
      
    </div>
  );
}

function Person(props)
{
  const personStyle = {
    border:"2px solid red",
    margin:"10px",
    padding:"5px",
    width: "700px"
  }

  const {name, cgpa} = props.student;

  return (
  <div style={personStyle}>
    <h1>Name: {name}</h1>
    <p>CGPA: {cgpa}</p>
  </div>
  )
}

export default App;
