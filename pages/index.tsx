/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { getPostsData } from "../lib/posts";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export const getStaticProps = async () => {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

type Post = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  index: number;
};

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>•̀.̫•́✧welcome to my blog</p>
      </section>

      <section className={utilStyles.headingMd}>
        <h2>📝takiblog</h2>

        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail, index }: Post) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={thumbnail}
                  alt={`article${index}`}
                  className={`${styles.thumbnailImage}`}
                />
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
