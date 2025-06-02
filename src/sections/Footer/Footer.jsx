import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Gouranga Das Samrat. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
