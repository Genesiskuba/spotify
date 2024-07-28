import { useNavigate } from "react-router-dom";

const ArtistCard = ({ song }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer
    onClick={() =>(`/author/${tracks.author[0].adamid)`}">
      <img
        src={song.thumbnail}
        alt="artists"
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {song?.author}
      </p>
    </div>
  );
};

export default ArtistCard;
