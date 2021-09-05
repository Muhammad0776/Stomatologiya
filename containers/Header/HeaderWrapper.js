import styled from "styled-components";
// import img from "../../public/images/bg-head.png";

const HeaderWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

  .logo {
    width: 57px;
    height: 51px;
  }

  .icons {
    width: 15px;
    height: 15px;
  }

  .nav-title {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #aaaaaa;
  }
  .nav-title:hover {
    color: #217a99 !important;
  }

  p {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 13.5px !important;
    line-height: 17px;
    color: #474747;
    cursor: alias;
  }

  Button {
    font-size: 12px;
    background: #38bcea;
    border-radius: 3px;
  }
  Button:hover {
    background: #38bcea;
  }

  ${"" /* Header style */}
  .bg-imag {
    ${"" /* background-image: url({img}); */}
    background-size: cover;
    background-position: 50% 50%;
  }
`;

export default HeaderWrapper;
