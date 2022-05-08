import "./App.css";

const formatName = (user) => {
  return user.firstname + " " + user.lastName;
};

const user = {
  firstname: "영석",
  lastName: "김",
};

let time = new Date().toLocaleTimeString;

function App() {
  if (user) {
    return (
      <div>
        <h2>
          {formatName(user)}! {time}
        </h2>
      </div>
    );
  } else {
    return <div>who are you</div>;
  }
}

export default App;
