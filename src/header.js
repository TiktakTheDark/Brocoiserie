import React, { useState, useEffect } from 'react';
import logo from './Logo_Brocoiserie.png';

function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);


    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (


        <div>
            <div>
                {scrollPosition > 0 ? <img src={logo}
                    className="App-logo"
                    alt="logo"
                    style={{ height: "100px", transition: 'all 0.3s ease', }} /> :
                    <img src={logo}
                        className="App-logo"
                        alt="logo"
                        style={{ height: "250px", transition: 'all 0.3s ease', }} />}
                
            </div>
            {scrollPosition > 0 ?
            <div className='app-header-2' style={{fontSize:"20px", transition: 'all 0.3s ease'}}>Boulangerie - Pâtisserie - Confiserie</div>:
            <div className='app-header-2' style={{fontSize:"60px", transition: 'all 0.3s ease'}}>Boulangerie - Pâtisserie - Confiserie</div>}
        </div>

    );
}

export default Header;