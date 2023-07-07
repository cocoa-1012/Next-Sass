import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/logo.svg" alt="Logo" className={styles.headerLogo} />
      </Link>
      <div className={styles.navs}>
        <Link href="/home">Home</Link>
        <Link href="/upgrade">Upgrade</Link>
      </div>
    </header>
  )
}

export default Header;