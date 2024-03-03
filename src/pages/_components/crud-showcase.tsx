import { api } from "~/trpc/api";
import { CreatePost } from "~/pages/_components/create-post";
import type { InferGetServerSidePropsType,GetServerSideProps } from 'next'


export default function CrudShowcase(
    {
        latestPost,
    }: any
) {

    return (
        <div className="w-full max-w-xs">
            {latestPost ? (
                <p className="truncate">Your most recent post: {latestPost.data?.name}</p>
            ) : (
                <p>You have no posts yet.</p>
            )}

            <CreatePost />
        </div>
    );
}
