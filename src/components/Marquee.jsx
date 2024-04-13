import styles from '../styles/Marquee.module.css';

function Marquee() {
  return (
    <>
      <section role="marquee" className={styles.marquee}>
        <p>The Future is Now is</p>
        <p>The Future is Now is</p>
        <p>The Future is Now is</p>
      </section>
    </>
  );
}

export default Marquee;
