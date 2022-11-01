import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const postDatas = await getPostData(params.id);

  return {
    props: {
      postDatas,
    },
  };
};

const Post = ({ postDatas }: any) => {
  return (
    <Layout>
      <Head>
        <title>{postDatas.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postDatas.title}</h1>
        <div className={utilStyles.lightText}> {postDatas.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postDatas.blogContentHTML }} />
      </article>
    </Layout>
  );
};

export default Post;
