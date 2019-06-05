import React from "react";
import "../SearchBar/SearchBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faCompass
} from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-left-container">
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="insta-icon header-icons"
          />
          <div className="bar"> </div>
          <div className="app-name">Instaclone</div>
        </div>

        <form className="search-form-container">
          <input type="text" name="search-input" placeholder="&#9906; Search" />
        </form>

        <div className="header-icons-container">
          <FontAwesomeIcon
            icon={faCompass}
            className="explore-icon header-icons"
            size="lg"
          />
          <FontAwesomeIcon
            icon={faComment}
            size="lg"
            className="comment-icon header-icons"
          />
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="heart-icon header-icons"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
