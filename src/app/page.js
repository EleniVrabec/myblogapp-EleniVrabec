require('dotenv').config();

import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Coffee from 'public/coffe.jpg';

export default function Home() {
  return (
    <>
    <div className={styles.imgContainer}>
        <Image src={Hero} alt='hero' width={1400} height={400} />
      </div>
    <div className={styles.container}>
      
      <div className={styles.item}>
        <h1 className={styles.h1}>
          Lorem ipsum dolor sit amet. Cum sociis natoque pen.
        </h1>
        <p className={styles.descrption}>
          Lorem ipsum orem ipsum dolor sit amet. Cum sociis natoque pen. Lorem
          sociis natoque pen
        </p>
        <button className={styles.button}>Lorem Ipsum</button>
      </div>
      
     <div  className={styles.item}> 
     <Image style={{ width: '500px', height: '500px', borderRadius: '50%', overflow: 'hidden' }} src={Coffee} alt='coffe' width={500} height={600} />
     </div>
    </div>
    </>
  );
}
