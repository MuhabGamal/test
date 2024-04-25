import { GetServerSideProps } from 'next';


export default function Index({ ip }: { ip: string }) {
    console.log(ip);

    return (
        <div>{ip}</div>
    )
}

export const getServerSideProps = (async context => {
    const forwarded = context.req.headers['x-forwarded-for'];
    const ip = forwarded
        ? (forwarded as string).split(/, /)[0]
        : context.req.socket.remoteAddress;

    return {
        props: {
            ip,
        },
    };
}) satisfies GetServerSideProps;
