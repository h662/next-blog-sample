import { allPosts } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { NextPage } from "next";
import Image from "next/image";

interface PostLayoutProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: PostLayoutProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    openGraph: {
      type: "website",
      url: post.url,
      title: post.title,
      description: post.desc,
      image: post.thumb ? `/images/${post.thumb}` : `/images/owl.png`,
    },
    twitter: {
      card: "summary_large_image",
      url: post.url,
      title: post.title,
      description: post.desc,
      image: post.thumb ? `/images/${post.thumb}` : `/images/owl.png`,
    },
  };
};

const PostLayout: NextPage<PostLayoutProps> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="pt-8 shadow-lg min-h-screen">
      {post.thumb && (
        <div className="flex justify-center">
          <Image
            className="w-32 md:w-64"
            src={`/images/${post.thumb}`}
            alt={post.title}
            width={256}
            height={256}
          />
        </div>
      )}
      <div className="w-full flex flex-col">
        <h1 className="text-center mx-2 md:text-2xl font-semibold">
          {post.title}
        </h1>
        <time
          className="text-right mt-2 text-gray-500 text-xs md:text-lg mx-2"
          dateTime={post.date}
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div
        className="mt-8 mx-4 text-sm truncate  md:text-xl [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-4 [&>ol]:my-4 [&>h3]:mt-4 [&>h3]:font-semibold [&>h3:last-child]:pb-4"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
