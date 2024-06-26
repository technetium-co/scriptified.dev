import Author from '../interfaces/author';
import { getUrlWithUtmTrackingParams } from '../utils';
import Text from './common/Text';

function Authors({ authors }: { authors: Array<string> | Array<Author> }): JSX.Element {
  return (
    <div className="pb-2">
      <Text as="span" size="sm" color="text-gray-600" additionalStyles="py-2 pr-1">
        by
      </Text>
      {authors.length
        ? authors?.map((author: Author | string, index) => {
            const isLastElement = index === authors.length - 1;

            if (typeof author === 'string') {
              return (
                <Text as="span" additionalStyles="uppercase" size="sm" color="text-gray-600" key={index}>
                  {isLastElement ? author : `${author}, `}
                </Text>
              );
            }

            const authorUrlWithTrackingParams = getUrlWithUtmTrackingParams({ url: author.website });

            return (
              <a href={authorUrlWithTrackingParams} target="_blank" rel="noreferrer" key={author.id}>
                <Text as="span" additionalStyles="uppercase hover:underline" size="sm" color="text-gray-600">
                  {isLastElement ? author.name : `${author.name}, `}
                </Text>
              </a>
            );
          })
        : null}
    </div>
  );
}

export default Authors;
