import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Shop = (props) => {
//   console.log(props);
  const { title, image, profile, beginners, programming, Mark_as_read } = props.product;
  const addBookmark = props.addBookmark;
  const markAsRead = props.markAsRead;
  return (
    <div>
      <div className="card-compact w-full bg-base-100">
        <figure>
          <img className="rounded" src={image} alt="programming img" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center my-8">
            <div className="flex justify-center items-center gap-6">
              <div>
                <img src={profile.img} alt="" />
              </div>
              <div>
                <h4 className="font-exo text-2xl text-black font-bold">
                  {profile.name}
                </h4>
                <p>
                  <small className="font-exo font-semibold text-base">
                    {profile.published_in}
                  </small>
                </p>
              </div>
            </div>
            <div>
              <p>
                <small className="font-exo font-medium text-xl">
                  {profile.read} min read <span onClick={() => addBookmark(props.product)} className="cursor-pointer"><FontAwesomeIcon icon={faBookmark} /></span>
                </small>
              </p>
            </div>
          </div>
          <h2 className="card-title mb-4 font-exo font-bold text-4xl text-black leading-[64px]">
            {title}
          </h2>
          <div className="flex gap-2 mb-5 text-xl font-medium">
            <span>{beginners}</span>
            <span>{programming}</span>
          </div>
          <p onClick={() => markAsRead(props.product)} className="font-exo text-xl font-semibold text-indigo-600 underline">
            {Mark_as_read}
          </p>
          <hr className="my-8" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
