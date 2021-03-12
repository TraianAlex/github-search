import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "components/SearchForm";
import Profile from "components/Profile";

const App = () => {
  return (
    <div className="container mt-3">
      <SearchForm />
      <Profile />
    </div>
  );
};

export default App;
