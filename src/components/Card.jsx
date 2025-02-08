import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    //logic
    if (likedCourses.includes(course.id)) {
      //phela se like hua pada hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id)); //cid means course id
      toast.warning('Liked Removed');
    } else {
      //phala sa like nahi hai
      //insert karna h ye course like courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non empty  phala se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success('Liked successfully');
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt="photes" />

        <div className="w-[40px] h-[40px] absolute bg-white rounded-full right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* description apiUrl thaka asacha */}
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 105) + '...'
            : course.description}
        </p>
      </div>
    </div>
  );
};
export default Card;
