import { Link } from "react-router-dom";
import styles from "./NotFoundStyles.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.description}>
        Oops! It seems like you&apos;ve ventured into uncharted territory. The
        page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className={styles.link}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
