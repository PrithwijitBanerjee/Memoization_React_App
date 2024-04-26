import PropTypes from 'prop-types'
import { memo } from 'react';

const Navbar = ({ article, changeArticle }) => {
    console.log('Navbar is rendered!!!');
    return (
        <div>
            I am {article} Navbar
            <button>{changeArticle()}</button>
        </div>
    )
}

Navbar.propTypes = {
    article: PropTypes.string,
    changeArticle: PropTypes.func
}

export const MemoizedNavbar = memo(Navbar);