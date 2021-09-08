import styled from "styled-components";

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

  .subtitle {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 13.5px !important;
    line-height: 17px;
    color: #474747;
    cursor: alias;
  }

  .but {
    font-size: 12px;
    background: #38bcea;
    border-radius: 3px;
  }
  .but:hover {
    background: #38bcea;
  }

  ${"" /* section style */}
  .bg-image {
    background-image: url("/images/bg-head.png");
    background-size: cover;
    background-position: 50% 50%;
  }

  .sidebar {
    background: linear-gradient(
      90deg,
      #ffffff 20.07%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    max-width: 700px !important;
  }

  .button {
    width: 215px;
    height: 50px;
    background: #38bcea;
    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
  .button:hover {
    background: #38bcea;
  }

  .img01 {
    width: 27px;
    height: 37px;
  }

  .glass {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 10px;
  }
`;

export default HeaderWrapper;
