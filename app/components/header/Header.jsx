import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/pokeapi_256.png'
import styles from './Header.module.css'
      

function Header() {
  return (
    <header className={styles.header}>
    <nav className={styles.navbar}>
      <div>
      <Image src={logo} alt="logo" priority width={120}/>
      </div>
      <div>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              Home
            </Link>
            </li>
            <li>
            <Link href="/about">
              About
            </Link>
            </li>
            <li>
            <Link href="/detalles">
              Detalles
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  </header>
  )
}

export default Header