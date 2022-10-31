import Head from "next/head";
import Link from "next/link";

const firstPost = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Hello Next!!</h1>
      <Link href="/">back to home</Link>
    </>
  );
};

export default firstPost;
