import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {thumbnail_url,details,title,rating,image_url,author,_id}=news
    return (
        <div className="max-w-sm rounded  mx-auto shadow-lg mb-6  bg-white">
            <div className='bg-slate-300 flex h-16 items-center '>
            <div className="w-10 h-10 rounded-full ml-4  mr-3 overflow-hidden">
          <img
          className='object-cover'
            alt="Tailwind CSS Navbar component"
            src={author.img} />
        </div>
                <div>
                    <h5 className='bold'>{author.name}</h5>
                    <small>{author.published_date}</small>
                </div>
            </div>
      <img
        className="w-full"
        src={image_url} // Replace this with your image URL
        alt="News Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
         {title}
        </div>
        <div>
          {
          details.length > 160 ? <p>{details.slice(0,160)} <Link className='text-blue-700' to={`/news/${_id}`}>Read More...</Link></p>
          :<p>{details}</p>
          }
   
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
         Ratings : {rating.number} 
        </span>
        <span className="inline-block mr-3 ml-3 mt-2 items-end  text-gray-600 text-sm">
        <MdOutlineRemoveRedEye className="size-5  " /> 
        </span>
        <span className="size-5">499</span>
      </div>
   </div>
   </div>
    );
};

export default NewsCard;