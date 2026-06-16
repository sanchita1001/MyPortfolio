import React from 'react';
import Title from '@/components/Title';
import { achievements } from '@/data/index';

const Acheivement = () => {
  return (
    <div className="mt-20">
      <Title title="Achievements" />

      <div className="card_container mt-10 flex flex-col gap-6">
        {achievements?.map((achievement: any, index: number) => (
          <div key={index}>
            <div className="card relative border border-grey-200 dark:border-[#27272a]  card bg-secondary p-12 rounded-2xl flex flex-col gap-6 dark:bg-darkBg items-start justify-center">
              <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
              <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

              <div className="contents_card flex flex-col gap-4">
                <div className="title_card flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-primary dark:text-white">{achievement?.name}</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    {achievement?.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acheivement;
