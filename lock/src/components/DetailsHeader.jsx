import { Link } from 'react-router-dom'







const DetailsHeader = ({authorId, authorData, songData}) => {
  const author =  authorData?.author[authorId]?.thumbnail;
  
  return (

  <div className='relative w-full flex flex-col '>
<div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28'/>

<div className='absolute inset-0 flex items-center'>

<img 
src={


  authorId ?author. artwork?.url.replace('{w}', '500').replace('{h}', '500')
  : songData?.coverart
} 

alt="no images to show"
className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'/>


<div className='ml-5'>

<p className='font-bold sm:3xl text-xl tex-white'>{authorId ? author.name : songData?.title}</p>

{!authorId && (

  <Link to={`/author/${songData?.author[0].adamid}`}>
  <p className='text-base text-gray-400 mt-2'>
{songData?.subtitle}


  </p>
  </Link>
)}

<p className='text-base text-gray-400 mt-2'>
{authorId
? author?.genreNames[0]
:songData?.genres?.primary

}
</p>

</div>
</div>


<div className='w-full sm:h-44 h-24'/>
  </div>

  
)
};

export default DetailsHeader;
