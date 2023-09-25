import { NextPage } from "next";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import PostCard from "./components/PostCard";
import MainBanner from "./components/MainBanner";

const Home: NextPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <MainBanner />
      <ul className="flex flex-col gap-8 mt-8">
        {posts.map((v, i) => (
          <PostCard key={i} post={v} />
        ))}
      </ul>
    </>
  );
};

export default Home;
