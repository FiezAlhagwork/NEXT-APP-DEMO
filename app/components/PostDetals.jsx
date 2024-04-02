const PostDetals = async ({title}) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${title}`,
        {
          next: {
            revalidate: 120,
          },
        }
      );
      const posts = await response.json();
  return (
    <div className=" w-64 border border-gray-300 rounded-md shadow-lg p-5 ">
      <h1 className=" text-lg font-medium leading-7">{posts.body}</h1>
    </div>
  );
};

export default PostDetals;
