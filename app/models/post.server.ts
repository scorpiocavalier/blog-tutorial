type Post = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtap I made Just For You",
    },
  ];
}
