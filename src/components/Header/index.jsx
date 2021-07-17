import styles from './styles.module.scss';
import { BiCart } from 'react-icons/bi';
import { MdPermIdentity } from 'react-icons/md';

export default function Home() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        <a href="/">
          Nanny<span>Concept</span>
        </a>
      </p>
      <input type="text" placeholder="O que você Procura?" />
      <div className={styles.myCount}>
        <a href="/">
          <MdPermIdentity size={30} />
        </a>
      </div>

      <a href="/">
        <BiCart size={30} />
      </a>
    </header>
  );
}
