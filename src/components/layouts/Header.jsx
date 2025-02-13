import styled from 'styled-components';

export default function Header() {
  return (
    <StLayout>
      Header
      <input placeholder="search keyword..."></input>
      <p>로그인 / 회원가입</p>
    </StLayout>
  );
}

const StLayout = styled.div`
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #b2b9c0;

  & > input {
    /* 검색창 */
    height: 30px;
    box-sizing: border-box;

    background: #ffffff;
    border: 1px solid #b2b9c0;
    border-radius: 6px;

    /* search keyword... */
    /* ::placeholder {
      position: absolute;
      left: 53.1%;
      right: 38.09%;
      top: 35%;
      bottom: 35%;
    } */

    /* Body 1 */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    display: flex;
    align-items: center;

    color: #666666;
  }

  // /* 로그인 / 회원가입 */

  & > p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
    /* identical to box height, or 0% */
    display: flex;
    align-items: center;

    color: #495057;
  }
`;

/* Header without login */
// position: relative;
//   width: 1512px;
//   height: 80px;
//   left: 69px;
//   top: 464px;

/* Rectangle 10 */

// box-sizing: border-box;

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// background: #ffffff;
// border-bottom: 1px solid #b2b9c0;

/* LOGO

<p>Placeholder visualization where a picture would be displayed on the UI.</p>
*/

/* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// position: absolute;
// left: 16.6%;
// right: 73.88%;
// top: 18.75%;
// bottom: 20%;

// /* Medium gray */
// background: #B2B9C0;

// /* Dashed Line */

// width: 144px;
// height: 49px;

// /* Light gray */
// border: 2px dashed #E2E5E9;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 1;
// margin: -999px 0px;

// /* Dashed Line */

// width: 144px;
// height: 49px;

// /* Light gray */
// border: 2px dashed #E2E5E9;

// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 1;

// /* 검색창 */

// position: absolute;
// left: 50%;
// right: 23.08%;
// top: 25%;
// bottom: 25%;

// /* Rectangle 8 */

// box-sizing: border-box;

// position: absolute;
// left: 50%;
// right: 23.08%;
// top: 25%;
// bottom: 25%;

// background: #FFFFFF;
// border: 1px solid #B2B9C0;
// border-radius: 6px;

// /* react-icons/md/MdOutlineSearch */

// position: absolute;
// left: 50.74%;
// right: 47.64%;
// top: 35%;
// bottom: 35%;

// /* Vector */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// /* Vector */

// position: absolute;
// left: 12.5%;
// right: 14.63%;
// top: 12.5%;
// bottom: 14.62%;

// background: #666666;

// /* search keyword... */

// position: absolute;
// left: 53.1%;
// right: 38.09%;
// top: 35%;
// bottom: 35%;

// /* Body 1 */
// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 24px;
// /* identical to box height, or 150% */
// display: flex;
// align-items: center;

// color: #666666;
