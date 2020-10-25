import React from 'react';
import { useThemeState } from '../theme/ThemeContext';
import Text from '../components/common/Text';
import Tip from '../public/images/tip.svg';
import ToolsAndResources from '../public/images/toolsAndResources.svg';
import DevOfTheWeek from '../public/images/devOfTheWeek.svg';
import TechTalks from '../public/images/techTalks.svg';
import Quiz from '../public/images/quiz.svg';
import Gif from '../public/images/gif.svg';
import Articles from '../public/images/articles.svg';

const featureData = [
  {
    name: 'Tip of the Day',
    icon: <Tip />,
    desc: 'Useful programming hot tips and tricks to make your dreadful lives easier',
  },
  {
    name: 'Articles',
    icon: <Articles />,
    desc: 'Insightful articles and tutorials around JavaScript and React world',
  },
  {
    name: 'Tools',
    icon: <ToolsAndResources />,
    desc: 'Helpful tools, resources and websites we can use to design and develop better user experiences',
  },
  {
    name: 'Dev of the Week',
    icon: <DevOfTheWeek />,
    desc: 'Featured developer of the week whose work is inspirational',
  },
  {
    name: 'Tech Talks',
    icon: <TechTalks />,
    desc: 'Interesting tech talks from conferences revolving around developement',
  },
  {
    name: 'Quiz',
    icon: <Quiz />,
    desc: 'Challenging programming quizzes to test your sharp programming minds',
  },
  {
    name: 'This Week in GIF',
    icon: <Gif />,
    desc: 'Moody GIFs to share with your co-workers on watercooler slack channels',
  },
];

const FeatureSection = () => {
  const theme = useThemeState();
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Text
            additionalStyles="mt-2 text-3xl leading-8 font-extrabold tracking-tight tracking-wide sm:text-4xl sm:leading-10"
            color="text-white"
            type="h3"
          >
            Sections
          </Text>

          <Text additionalStyles="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto" color="text-gray-200" type="base">
            A look at what&apos;s inside our newsletter
          </Text>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {featureData.map(feature => {
              return (
                <li key={feature.name} className="p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div
                        className={`flex items-center justify-center h-16 w-16 rounded-md bg-${theme}-600 text-${theme}-100`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <Text color="text-white" additionalStyles="text-lg leading-6 font-semibold">
                        {feature.name}
                      </Text>
                      <Text color={`text-${theme}-100`} additionalStyles="mt-1 text-base leading-6 max-w-sm">
                        {feature.desc}
                      </Text>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
