import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div><p>All Right received</p></div>
      <div >Social Media icons
        <Image src='/01.png' className='icon' alt='facebook' width={15} height={15}/>
        <Image src='/01.png' className='icon'  alt='facebook' width={15} height={15}/>
        <Image src='/01.png' className='icon'  alt='facebook' width={15} height={15}/>
        <Image src='/01.png' className='icon'  alt='facebook' width={15} height={15}/>

      </div>
      
      </div>
    
  )
}

export default Footer