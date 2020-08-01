import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  /* border: 2px solid; */
  /* border-radius: 4px;197 */
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 400px;
  width: 400px;
  height: 300px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 10px; */
  position: relative;
  display: flex;
  align-items: flex-end;
  /* padding: 5px; */

  transition: transform .3s;
  &:hover,
  &:focus {
    /* opacity: .5; */
    z-index: 10;
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -o-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
