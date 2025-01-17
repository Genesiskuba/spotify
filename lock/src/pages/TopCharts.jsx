import { useSelector } from "react-redux";

import { useGetTopchartsQuery } from "../redux/services/shazamCore";
import { Error, Loader, SongCard } from "../components";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopchartsQuery();

  if (isFetching ) return <Loader title="Loading top charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
   
          />
        ))}
      </div>
    </div>
  );
};
export default TopCharts;
