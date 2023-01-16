import React from 'react';
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.footerWrapper}>
        <hr />

        <div className={css.footer}>
            <div className={css.logo}>
                <img src={Logo} alt="logo" />
                <span>borneo</span>    
            </div> 

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>123 North South Kampung, Sarawak, MY</span>
                    </span>

                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon}/>
                        <a href='tel:123-456-0987'>123-456-0987</a>
                    </span>

                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <a href='mailto:support@borneo.com'>support@borneo.com</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        <span>Sign In</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href='/about'>
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        <a href="/about">
                            <p>Safety Privacy & Terms</p>
                        </a>
                    </span>
                </div>
            </div>
        </div>  

        <div className={css.copyRight}>
            <span>Copyright © 2023 by Borneo, Inc</span>
            <span>All rights reserved</span>
        </div>  
    </div>
  )
}

export default Footer