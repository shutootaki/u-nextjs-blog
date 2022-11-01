import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
      {postDatas.title}
      <br />
      {postDatas.date}
      <br />
      {postDatas.blogContentHTML}
    </Layout>
  );
};

export default Post;
