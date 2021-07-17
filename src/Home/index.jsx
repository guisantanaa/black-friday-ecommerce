import { useState } from 'react';
import BlackFriday from '../assets/black-friday.jpg';
import Blusinha1 from '../assets/blusinha1.jpeg';
import Blusinha2 from '../assets/blusinha2.jpeg';
import Blusinha3 from '../assets/blusinha3.jpeg';
import Blusinha4 from '../assets/blusinha4.jpeg';
import styles from './styles.module.scss';

export default function Home() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  function submitForm(event) {
    event.preventDefault();

    let data = {
      name,
      email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('name, email', convertData);
  }

  function ReloadPage() {
    window.location.reload();
  }

  return (
    <main>
      <div className={styles.blackFriday}>
        <img src={BlackFriday} alt="black friday" />
      </div>

      <h1 className={styles.subTitle}>Ofertas Black Friday</h1>

      <section className={styles.cardContainer}>
        <div className={styles.Card}>
          <img src={Blusinha1} alt="card" />
          <p>KEEP CALM AND COMA CUSCUZ</p>
          <span>*****</span>
          <p className={styles.price}>R$: 29,90</p>
          <p className={styles.subPrice}>Ou 10x de R$ 2,29 com juros</p>
          <button>Adicionar ao Carrinho</button>
        </div>

        <div className={styles.Card}>
          <img src={Blusinha2} alt="card" />
          <p>BRANCO LISA</p>
          <span>*****</span>
          <p className={styles.price}>R$: 29,90</p>
          <p className={styles.subPrice}>Ou 10x de R$ 2,29 com juros</p>
          <button>Adicionar ao Carrinho</button>
        </div>

        <div className={styles.Card}>
          <img src={Blusinha3} alt="card" />
          <p>PRETO MESCLA</p>
          <span>*****</span>
          <p className={styles.price}>R$: 29,90</p>
          <p className={styles.subPrice}>Ou 10x de R$ 2,29 com juros</p>
          <button>Adicionar ao Carrinho</button>
        </div>

        <div className={styles.Card}>
          <img src={Blusinha4} alt="card" />
          <p>CAFE COPO CORACAO cinza</p>
          <span>*****</span>
          <p className={styles.price}>R$: 29,90</p>
          <p className={styles.subPrice}>Ou 10x de R$ 2,29 com juros</p>
          <button>Adicionar ao Carrinho</button>
        </div>
      </section>

      <div className={styles.Form}>
        <form onSubmit={submitForm}>
          <h2>Inscreva-se e receba promoções e novidades exlusivas</h2>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="name"
            placeholder="Nome"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <button type="submit" onClick={ReloadPage}>
            INSCREVER-SE
          </button>
        </form>
      </div>
    </main>
  );
}
