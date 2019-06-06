import React from "react";
// import "../SearchBar/SearchBar.scss";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faCompass
} from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = styled.div`
  font-size: 1.5rem;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    div,
    form {
      margin-bottom: 3%;
      padding: 0;
    }
  }
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 2%;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 175px;
  .bar {
    width: 2px;
    height: 1.5rem;
    background-color: black;
  }
  font-family: "Pacifico", cursive;
`;

const InputContainer = styled.form`
  input {
    font-size: 1rem;
    padding: 1%;
    text-align: center;
    border-radius: 2px;
    border: 1px solid black;
    background-color: #fafafa;
  }
`;

const HeaderIconsContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 60%;
    margin-top: 2%;
  }
`;

class SearchBar extends React.Component {
  state = {
    searchInput: ""
  };

  manageSearchInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Header>
        <LeftContainer>
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="insta-icon header-icons"
          />
          <div className="bar"> </div>
          <div className="app-name">Instaflam</div>
        </LeftContainer>

        <form onSubmit={e => this.props.filterPosts(e, this.state.searchInput)}>
          <InputContainer>
            <input
              type="text"
              name="searchInput"
              placeholder="&#9906; Search"
              value={this.state.searchInput}
              onChange={e => this.manageSearchInput(e)}
            />
          </InputContainer>
        </form>

        <HeaderIconsContainer>
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
        </HeaderIconsContainer>
      </Header>
    );
  }
}

export default SearchBar;
