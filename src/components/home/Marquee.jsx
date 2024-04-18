import styles from '../../styles/home/Marquee.module.css';

function Marquee() {
  return (
    <>
      <section aria-hidden role="marquee" className={styles.marquee}>
        <p>The Future is Now is</p>
        <p>The Future is Now is</p>
        <p>The Future is Now is</p>
      </section>
    </>
  );
}

export default Marquee;
