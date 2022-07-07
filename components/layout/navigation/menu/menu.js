import Link from 'next/link';
import { bool, func } from 'prop-types';
import { StyledMenu } from './menu.styled';

const Menu = ({ open, setOpen }) => (
        <StyledMenu open={open}>
            <Link href="/">
                <a onClick={() => setOpen(!open)}>HOME</a>
            </Link>
            <Link href="/about">
                <a onClick={() => setOpen(!open)}>About Us</a>
            </Link>
        </StyledMenu>
    );

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu;