import PostDetals from "@/app/components/PostDetals";
import { Suspense } from "react";
import Loading from "./loading";

const PostTitle = ({ params }) => {
  console.log(params.title);
  return (
    <>
      <h1 className=" text-5xl font-medium capitalize text-center mt-2">
        Post Detals
      </h1>
      <section className=" flex  h-[86vh] justify-center items-center">
        <Suspense fallback={<Loading/>}>
          <PostDetals title={params.title} />
        </Suspense>
      </section>
    </>
  );
};

export default PostTitle;
