import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import background from 'images/background.jpg';
import propTypes from 'prop-types';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;

  &:before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.3;
    filter: blur(5px);
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-around;
  padding: 0 16px; 
  height: 5rem;
  overflow: visible;
  background-color: transparent;
  z-index: 1;

  &:before {
    content: '';
   background: rgb(238,174,202);
  background: radial-gradient(circle,
  rgba(238,174,202,1) 45%, 
  rgba(162,148,233,0.8156512605042017) 
  100%);
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  z-index: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    color: #ff3cac;
    text-shadow: 3px 3px 20px #ff3cac, -2px 1px 30px #ff3cac;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #ff3cac;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Title = styled.h1`
  z-index: 1;

  color: #f66b0e;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Comfortaa', sans-serif;
  display: flex;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

Container.propTypes = {
  background: propTypes.string,
};

Logo.propTypes = {
  logoImage: propTypes.string,
};

Link.propTypes = {
  to: propTypes.string,
  onclick: propTypes.func,
};
