import React from "react";

const SearchBar = () => {
  return (
    <div className="header-container">
      <div className="insta-icon header-icons" />
      <div>Instaclone</div>
      <form className="search-form-container">
        <input type="text" name="search-input" placeholder="Search" />
      </form>
      <div className="header-icons-container" />
      <div className="explore-icon header-icons" />
      <div className="heart-icon header-icons" />
      <div className="user-icon header-icons" />
    </div>
  );
};

export default SearchBar;
