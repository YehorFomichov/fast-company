import React from "react";

const SearchStatus = (props) => {
  const getCase = (number) => {
    const lastDigit = number % 10;
    if (number === 1) {
      return `${number} человек тусанет с тобой сегодня`;
    } else if (number > 1 && lastDigit >= 2 && lastDigit <= 4) {
      return `${number} человека тусанут с тобой сегодня`;
    } else if (number === 0) {
      return `Никто с тобой не тусанет`;
    } else return `${number} человек тусанут с тобой сегодня`;
  };
  const renderPhrase = (number) => {
    return number > 0 ? (
      <span className="badge bg-primary">{getCase(number)}</span>
    ) : (
      <span className="badge bg-danger">{getCase(number)}</span>
    );
  };
  return <h1>{renderPhrase(props.numberOfUsers)}</h1>;
};

export default SearchStatus;
