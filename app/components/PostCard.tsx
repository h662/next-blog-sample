import { FC } from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <li className="shadow-md px-2 py-4">
      <Link
        className="flex flex-col items-center md:flex-row w-full"
        href={post.url}
      >
        <div className="md:w-32 shrink-0">
          <Image
            src={`${post.thumb ? "/images/" + post.thumb : "/images/owl.png"}`}
            alt={post.title}
            width={128}
            height={128}
          />
        </div>
        <div className="ml-4 flex flex-col justify-center gap-2 w-full md:w-[624px]">
          <h2 className="text-2xl font-semibold truncate">{post.title}</h2>
          <time className="text-gray-500" dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className="truncate">{post.desc}</div>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
