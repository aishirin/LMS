import React from "react";
import styles from "./Footer.module.css";
import { MdPlace, MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaInstagram ,FaLinkedin , FaFacebookSquare, FaTwitter  } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <div className={styles.col_one}>
            <MdPlace className={styles.iconn} />
            <section className={styles.textCont}>
              <h4>Find us</h4>
              <span>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Eldik+Family+Medicine+Clinic/@42.8680759,74.5759512,17z/data=!4m6!3m5!1s0x389ec8390a54b509:0x36c2026a9839598e!8m2!3d42.868142!4d74.574129!16s%2Fg%2F11c1nf3jdn?entry=ttu"
                >
                 Молодая гвардия 2/1
                </a>
              </span>
            </section>
          </div>
          <div className={styles.col_one}>
            <MdCall className={styles.iconn} />
            <section className={styles.textCont}>
              <h4>Call</h4>
              <span>
                <a
                  href="https://api.whatsapp.com/send/?phone=996707400930&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  +996 (707) 400 930
                </a>
              </span>
            </section>
          </div>
          <div className={styles.col_one}>
            <IoIosMail className={styles.iconn} />
            <section className={styles.textCont}>
              <h4>Mail</h4>
              <span>
                <a href="mailto:adelina.almazova@caedmi.com" target="_blank">
                  adelina.almazova@caedmi.com
                </a>
              </span>
            </section>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <p>Copyright © 2024 Level<span>UP</span></p>
          <div className={styles.btn_sec}>
            <a href=""  className={styles.btn}><FaInstagram className={styles.icon}/></a>
            <a href=""  className={styles.btn}><FaLinkedin  className={styles.icon}/></a>
            <a href=""  className={styles.btn}><FaFacebookSquare className={styles.icon}/></a>
            <a href=""  className={styles.btn}><FaTwitter className={styles.icon}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
