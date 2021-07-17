import { TiSocialFacebookCircular, TiSocialInstagram } from 'react-icons/ti';
import { IoLogoWhatsapp } from 'react-icons/io';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.cardInformation}>
        <h2>Institucional</h2>
        <a href="/">Empresa</a>
        <a href="/">Como Comprar</a>
        <a href="/">Segurança</a>
        <a href="/">Envio</a>
        <a href="/">Pagamento</a>
      </section>

      <section className={styles.cardSocial}>
        <a href="/">
          <TiSocialFacebookCircular color="#60656f" size={30} />
        </a>
        <a href="/">
          <TiSocialInstagram color="#60656f" size={30} />
        </a>

        <a href="/">
          <IoLogoWhatsapp color="#60656f" size={30} />
        </a>
      </section>
    </footer>
  );
}
