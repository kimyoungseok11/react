import "./App.css";

const formatName = (user) => {
  return user.firstname + " " + user.lastName;
};

const user = {
  firstname: "μμ",
  lastName: "κΉ",
};

function App() {
  if (user) {
    return (
      <div>
        <h2>{formatName(user)}!</h2>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  } else {
    return <div>who are you</div>;
  }
}

export default App;
