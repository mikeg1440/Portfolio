import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

export default function Menubar() {
    return (
        <MenuContainer>
            <MenuLogo>
              <h3>Portfolio Site</h3>
            </MenuLogo>

            <Menu>
                <MenuItem>
                    Menu Item 1
                </MenuItem>
                <MenuItem>
                    Menu Item 2
                </MenuItem>
                <MenuItem>
                    Menu Item 3
                </MenuItem>
            </Menu>
            
      </MenuContainer>
    )
}


const MenuContainer = styled.div`
  border: 1px solid black;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background-color: #1b242f;
  border-bottom: 1px solid #04c2c9;
  color: #c10cc1;
`

const MenuLogo = styled.div` 

`

const Menu = styled.div`
  display: flex;
  align-items: center;
`

const MenuItem = styled.div`
  padding: .5rem 1rem;
  :hover {
      cursor: pointer;
      filter: brightness(150%);
  }
`