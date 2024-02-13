import React, { useState } from "react";
import MapInterface from "./MapInterface";

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="지역을 검색하세요." onChange={onChange} value={inputText} />
        <button type="submit">검색</button>
      </form>
      <MapInterface searchPlace={place} />
    </>
  );
};

export default SearchPlace;
