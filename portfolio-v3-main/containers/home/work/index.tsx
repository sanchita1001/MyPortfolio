'use client';
import React from 'react';
import Title from '@/components/Title';
import ProjectCard from '@/components/projectCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper';

import { projects } from '@/data/index';

const Work = () => {
  return (
    <section id="work" className="mt-20">
      <Title title="Projects" />

      <div className="slider mt-10 md:mt-20 ">
        <Swiper
          navigation={true}
          className="mySwiper"
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 30
            },

            1900: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }}
        >
          {projects?.map((project: any, index: number) => (
            <SwiperSlide key={index}>
              <ProjectCard
                image={null}
                title={project.name}
                description={project.desc}
                link={project.web}
                github={project.github}
                tech={project.tech}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
