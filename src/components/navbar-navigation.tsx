"use client";
import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="tab-container">
        <input
          type="radio"
          name="tab"
          id="tab1"
          className="tab tab--1"
          defaultChecked
        />
        <label className="tab_label" htmlFor="tab1">
          Home
        </label>

        <input type="radio" name="tab" id="tab2" className="tab tab--2" />
        <label className="tab_label" htmlFor="tab2">
          Portfolio
        </label>

        <input type="radio" name="tab" id="tab3" className="tab tab--3" />
        <label className="tab_label" htmlFor="tab3">
          Services
        </label>
        <input type="radio" name="tab" id="tab4" className="tab tab--4" />
        <label className="tab_label" htmlFor="tab4">
          About
        </label>
        <input type="radio" name="tab" id="tab5" className="tab tab--5" />
        <label className="tab_label" htmlFor="tab5">
          Blogs
        </label>

        <div className="indicator" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tab-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2px;
    // padding-top: 10px;
    padding-bottom: 6px;
    background-color: #0000;
    border-radius: 15px; /* Rounding the outer border */
    border: 1px solid white;
  }

  .indicator {
    content: "";
    width: 130px;
    height: 25px;
    background: #d0ff71;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 9;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 7px 8px rgba(208, 255, 113), 0px 3px 1px rgba(0, 0, 0, 0.04);
    border-radius: 14px; /* Rounding the indicator */
    transition: all 0.2s ease-out;
  }

  .tab {
    width: 130px;
    height: 28px;
    position: absolute;
    z-index: 99;
    outline: none;
    opacity: 0;
  }

  .tab_label {
    width: 130px;
    height: 28px;
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    font-size: 0.75rem;
    opacity: 0.6;
    cursor: pointer;
    color: white;
    transition: color 0.2s ease-out;
  }

  /* Ensure Profile label is black when the page is refreshed */
  .tab--1:checked ~ .tab_label[for="tab1"],
  .tab--1:checked ~ .tab_label[for="tab1"]:focus {
    color: black;
    font-size: 15px;
    font-weight: semi-bold;
  }

  .tab--2:checked ~ .tab_label[for="tab2"],
  .tab--2:checked ~ .tab_label[for="tab2"]:focus {
    color: black;
    font-size: 15px;
    font-weight: semi-bold;
  }

  .tab--3:checked ~ .tab_label[for="tab3"],
  .tab--3:checked ~ .tab_label[for="tab3"]:focus {
    color: black;
    font-size: 15px;
    font-weight: semi-bold;
  }
  .tab--4:checked ~ .tab_label[for="tab4"],
  .tab--4:checked ~ .tab_label[for="tab4"]:focus {
    color: black;
    font-size: 15px;
    font-weight: semi-bold;
  }
  .tab--5:checked ~ .tab_label[for="tab5"],
  .tab--5:checked ~ .tab_label[for="tab5"]:focus {
    color: black;
    font-size: 15px;
    font-weight: semi-bold;
  }

  .tab--1:checked ~ .indicator {
    left: 2px;
  }

  .tab--2:checked ~ .indicator {
    left: calc(130px + 2px);
  }

  .tab--3:checked ~ .indicator {
    left: calc(130px * 2 + 2px);
  }
  .tab--4:checked ~ .indicator {
    left: calc(130px * 3 + 2px);
  }
  .tab--5:checked ~ .indicator {
    left: calc(130px * 4 + 2px);
  }
`;

export default Button;
