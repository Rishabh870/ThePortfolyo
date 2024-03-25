import React from "react";
import { Link } from "react-router-dom";

import TinySlider from "tiny-slider-react";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";

import { review } from "../Data/data";
import { useSelector } from "react-redux";

const settings = {
  lazyload: true,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  gutter: 12,
  responsive: {
    992: {
      items: 3,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};
export default function Clients() {
  const userData = useSelector((state) => state.user.data);
  const testimonialsData = userData?.testimonials;
  //   console.log(testimonialsData);

  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="testi"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Client's Review
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Obviously I'm a {userData?.about?.title}. {userData?.about?.title}{" "}
            with over {userData?.about?.exp_year}
            years of experience. Experienced with all stages of the development.
          </p>
        </div>
        <div className="grid relative grid-cols-1 mt-8">
          <div className="tiny-three-item">
            {testimonialsData && (
              <TinySlider settings={settings}>
                {testimonialsData
                  ?.filter((item) => item.enabled) // Filter data based on "enabled" field

                  .map((item, index) => (
                    <div className="tiny-slide" key={index}>
                      <div className="customer-testi">
                        <div className="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                          <i className="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                          <p className="text-slate-400 text-[15px] text-ellipsis">
                            {item?.review}
                          </p>
                          <ul className="list-none mb-0 text-amber-400 mt-3">
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="text-center mt-5">
                          <img
                            src={item?.image?.url}
                            className="h-14 w-14 rounded-full shadow-md mx-auto mb-1"
                            alt={item?.public_id}
                          />
                          <Link
                            to=""
                            className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out"
                          >
                            {item?.name}
                          </Link>
                          <span className="text-slate-400 text-sm block">
                            {item?.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </TinySlider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
