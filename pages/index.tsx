import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Netfilx clone</h1>
      <p>
        {user?.name} {user?.email}
      </p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">
        Sign out
      </button>
    </>
  );
}
