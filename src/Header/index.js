import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Wrapper = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const HeaderRow = styled.div`
  padding: 16px 0;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <HeaderRow className="row middle-lg between-lg">
          <div className="col-lg-1">
            <Logo />
          </div>
          <div className="col-lg-5 start-lg">
            <Search />
          </div>
          <div className="col-lg-6 end-lg">
            <Nav />
          </div>
        </HeaderRow>
      </div>
    </Wrapper>
  );
}
