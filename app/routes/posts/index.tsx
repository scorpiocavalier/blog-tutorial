import { json, Link, useLoaderData } from "remix";
import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
