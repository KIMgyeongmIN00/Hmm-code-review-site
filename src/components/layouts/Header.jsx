import styled from 'styled-components';

export default function Header() {
  return (
    <StLayout>
      Header
      <input placeholder="search keyword..."></input>
    </StLayout>
  );
}

const StLayout = styled.div`
  position: relative;
  width: 1512px;
  height: 80px;
  left: 69px;
  top: 464px;
  /* Rectangle 10 */

  box-sizing: border-box;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #ffffff;
  border-bottom: 1px solid #b2b9c0;

  & > input {
    /* 검색창 */

    position: absolute;
    left: 50%;
    right: 23.08%;
    top: 25%;
    bottom: 25%;

    /* Rectangle 8 */

    box-sizing: border-box;

    position: absolute;
    left: 50%;
    right: 23.08%;
    top: 25%;
    bottom: 25%;

    background: #ffffff;
    border: 1px solid #b2b9c0;
    border-radius: 6px;

    /* react-icons/md/MdOutlineSearch */

    position: absolute;
    left: 50.74%;
    right: 47.64%;
    top: 35%;
    bottom: 35%;

    /* Vector */

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* Vector */

    position: absolute;
    left: 12.5%;
    right: 14.63%;
    top: 12.5%;
    bottom: 14.62%;

    background: #666666;

    /* search keyword... */

    position: absolute;
    left: 53.1%;
    right: 38.09%;
    top: 35%;
    bottom: 35%;

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
`;
