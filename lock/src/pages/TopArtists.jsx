import { useGetTopchartsQuery } from "../redux/services/shazamCore";
import { ArtistCard, Loader, Error } from "../components";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopchartsQuery();

  if (isFetching) return <Loader title="Loading top artists" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song) => (
          <ArtistCard key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
