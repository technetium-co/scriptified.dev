import Image from 'next/image';
import ArticleItem from './ArticleItem';
import Tool from '../interfaces/tool';
import { getUrlWithUtmTrackingParams } from '../utils';

const ToolItem = ({ tool: { title, url, logo, authors, desc, tags } }: { tool: Tool }): JSX.Element => {
  const article = { title, url, desc, authors, tags };

  const toolUrlWithTrackingParams = getUrlWithUtmTrackingParams({ url });

  return (
    <div className="flex flex-wrap sm:flex-nowrap flex-row items-center">
      <a
        href={toolUrlWithTrackingParams}
        className="w-full mr-8 max-w-[fit-content] my-4 p-1 transition duration-700 hover:scale-105 img-shadow-sm hover:img-shadow-none"
        target="_blank"
        rel="noreferrer"
        aria-label={title}
      >
        <Image
          className="h-32 w-32 inline rounded object-contain p-2 self-center"
          width={120}
          height={120}
          alt={title}
          src={logo}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </a>
      <ArticleItem article={article} />
    </div>
  );
};

export default ToolItem;
