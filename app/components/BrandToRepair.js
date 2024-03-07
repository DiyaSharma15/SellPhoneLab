import React from "react";
import Link from "next/link";
import styles from "../cssFiles/BrandToRepair.module.css"; 

export default function BrandToRepair(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>Choose Your Brand to Repair </div>
            <ul className={styles.brandList}>
                <li className={styles.brandItem}>
                    <Link href={'/repair?selectedBrand=Apple'}>
                        <img src="\assets\images\home\Logo-Apple.png" alt="Apple Logo" className={styles.logo}/>
                    </Link>
                </li>
                <li className={styles.brandItem}>
                    <Link href={'/repair?selectedBrand=Samsung'}>
                        <img src="\assets\images\home\Logo-Samsung.png" alt="Samsung Logo" className={styles.logo}/>
                    </Link>
                </li>
                <li className={styles.brandItem}>
                    <Link  href={'/repair?selectedBrand=Google'}>
                        <img src="\assets\images\home\Logo-Google.png" alt="Google Logo" className={styles.logo}/>
                    </Link>
                </li>
                <li className={styles.brandItem}>
                    <Link href={'/repair?selectedBrand=LG'}>
                        <img src="\assets\images\home\Logo-LG.png" alt="LG Logo" className={styles.logo}/>
                    </Link>
                </li>
                <li className={styles.brandItem}>
                    <Link href={'/repair?selectedBrand=Huawei'}>
                        <img src="\assets\images\home\Logo-Huawei.png" alt="Huawei Logo" className={styles.logo}/>
                    </Link>
                </li>
                <li className={styles.brandItem}>
                    <Link href={'/repair?selectedBrand=Others'}>
                        <img src="\assets\images\home\other-phones-2.jpg" alt="Other Phone Brand" className={styles.logo}/>
                    </Link>
                </li>
            </ul>
        </div>  
    );
}