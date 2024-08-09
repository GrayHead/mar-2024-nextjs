import React from 'react';
import NavLinkClientComponent from "@/components/nav-link-client-component/NavLinkClientComponent";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLinkClientComponent path={'/'}>home</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/users'}>users page</NavLinkClientComponent>

                </li>
                <li>
                    <NavLinkClientComponent path={'/posts'}>posts page</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/meals'}>meals page</NavLinkClientComponent>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
