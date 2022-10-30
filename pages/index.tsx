/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
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
      <div>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" alt="article1" />
          </Link>
        </article>
      </div>
    </Layout>
  );
}
