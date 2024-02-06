import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useMovieLists from "@/hooks/useMovieLists";
import useFavorites from "@/hooks/useFavorites";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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
  const { data: movies = [] } = useMovieLists();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
