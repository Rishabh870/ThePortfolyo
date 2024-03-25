import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import Lightbox from "react-18-image-lightbox";
import "../../node_modules/react-18-image-lightbox/style.css";
import { useSelector } from "react-redux";
const images = [
  "/images/works/1.jpg",
  "/images/works/2.jpg",
  "/images/works/3.jpg",
  "/images/works/4.jpg",
  "/images/works/5.jpg",
  "/images/works/6.jpg",
  "/images/works/7.jpg",
  "/images/works/8.jpg",
];

export default function Projects() {
  const userData = useSelector((state) => state.user.data);

  const projectData = userData?.projects;
  //   console.log(projectData);

  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleCLick = (index) => {
    console.log(index);
    setActiveIndex(index);
    setOpen(!isOpen);
  };

  return (
    <>
      <section className="relative md:py-24 py-16" id="project">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              My Work & Projects
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
              {" "}
              Obviously I'm a {userData?.about?.title}. {userData?.about?.title}{" "}
              with over {userData?.about?.exp_year}
              years of experience. Experienced with all stages of the
              development.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            {projectData
              ?.filter((item) => item.enabled) // Filter data based on "enabled" field
              .sort((a, b) => a.sequence - b.sequence)
              ?.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800"
                >
                  <img src={item?.image?.url} alt="" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                  <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <Link2
                      to={item?.liveurl}
                      className="text-white hover:text-amber-500 font-semibold transition-all duration-500"
                    >
                      {item?.title}
                    </Link2>
                    <span className="block text-sm text-slate-400">
                      {item?.techStack}
                    </span>
                  </div>

                  <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2
                      to=""
                      onClick={() =>
                        handleCLick(projectData?.length - index - 1)
                      }
                      className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
                    >
                      <Unicons.UilCamera width={16} />
                    </Link2>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={projectData[photoIndex]?.image?.url}
          nextSrc={projectData[(photoIndex + 1) % projectData?.length]}
          prevSrc={
            projectData[
              (photoIndex + projectData?.length - 1) % projectData?.length
            ]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex(
              (photoIndex + projectData?.length - 1) % projectData?.length
            )
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % projectData?.length)
          }
        />
      )}
    </>
  );
}
