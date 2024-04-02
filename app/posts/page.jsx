import Link from "next/link";
import Todos from "../components/todos";

const PostPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  return (
    <section className=" container mx-auto">
      <div className=" flex  justify-center ">
        <h1 className=" text-4xl font-extrabold mt-2">Posts Page</h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-1">
        {posts.map((items) => {
          return (
            <Link href={`/posts/${items.id}`} key={items.id} className="mx-2 rounded-md shadow-lg border hover:border-gray-600 transition-all duration-200 p-5  my-4">
              <div className=" ">
                <h2 className=" text-xl py-2">{items.title}</h2>
                <p className=" text-sm text-gray-500">{items.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PostPage;
