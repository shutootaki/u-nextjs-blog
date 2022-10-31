/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>welcome to my blog</p>
      </section>

      <section className={utilStyles.headingMd}>
        <h2>📝takiblog</h2>

        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="article1"
                className={`${styles.thumbnailImage}`}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              first post
            </Link>
            <br />
            <small className={utilStyles.lightText}>2022/01/09</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="article1"
                className={`${styles.thumbnailImage}`}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              first post
            </Link>
            <br />
            <small className={utilStyles.lightText}>2022/01/09</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="article1"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              first post_
            </Link>
            <br />
            <small className={utilStyles.lightText}>2022/01/09</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="article1"
                className={`${styles.thumbnailImage}`}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              first post
            </Link>
            <br />
            <small className={utilStyles.lightText}>2022/01/09</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
