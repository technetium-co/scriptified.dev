import Quiz, { Option as OptionType } from '../interfaces/quiz';

import Button from './common/Button';
import CheckMark from './icons/check';
import CodeSnippet from './common/CodeSnippet';
import React from 'react';
import Text from './common/Text';
import XCricle from './icons/x-circle';
import { useThemeState } from '../theme/ThemeContext';

const QuizComponent = ({ quiz }: { quiz: Quiz }): JSX.Element => {
  const [currentOption, setOption] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const hasSelectedCorrectOption = selectedOptions.includes(quiz.answerId);

  const handleSubmit = () => {
    setSelectedOptions(oldOptions =>
      currentOption && !oldOptions.includes(currentOption) ? [...oldOptions, currentOption] : oldOptions
    );
  };

  return (
    <div>
      <Text type="h3" color="text-black" additionalStyles="mt-2">
        {quiz.question}
      </Text>
      {quiz.snippet && <CodeSnippet snippet={quiz.snippet} />}
      {quiz.options.map(option => (
        <Option
          isSelected={currentOption === option.id}
          isDisabled={hasSelectedCorrectOption}
          isShowingDetailView={selectedOptions.includes(option.id)}
          option={option}
          key={option.id}
          isCorrectAnswer={quiz.answerId === option.id}
          onSelect={setOption}
        />
      ))}
      <div className="flex justify-center w-full">
        <Button type="primary" size="lg" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

const Option = ({
  isSelected,
  isDisabled,
  isShowingDetailView,
  option,
  onSelect,
  isCorrectAnswer,
}: {
  isSelected: boolean;
  isDisabled: boolean;
  isShowingDetailView: boolean;
  option: OptionType;
  onSelect: (id: number) => void;
  isCorrectAnswer: boolean;
}): JSX.Element => {
  const theme = useThemeState();

  // Colors for options for its different states

  const DEFAULT_BACKGROUND = `bg-${theme}-100`;
  const DEFAULT_BORDER = `border-${theme}-300`;

  const CORRECT_ANSWER_BACKGROUND = `bg-green-200`;
  const CORRECT_ANSWER_BORDER = `border-green-700`;

  const WRONG_ANSWER_BACKGROUND = 'bg-red-200';
  const WRONG_ANSWER_BORDER = 'border-red-700';

  const HIGHLIGHTED_BORDER = `border-${theme}-600`;
  // const HIGHLIGHTED_BACKGROUND = `bg-${theme}-300`;
  const HOVER_BORDER = `hover:border-${theme}-600`;

  const answeredBackground = isCorrectAnswer ? CORRECT_ANSWER_BACKGROUND : WRONG_ANSWER_BACKGROUND;
  const answeredBorder = isCorrectAnswer ? CORRECT_ANSWER_BORDER : WRONG_ANSWER_BORDER;

  const normalBorder = isSelected ? HIGHLIGHTED_BORDER : DEFAULT_BORDER;
  // const normalBackground = isSelected ? HIGHLIGHTED_BACKGROUND : DEFAULT_BACKGROUND;

  const background = isShowingDetailView ? answeredBackground : DEFAULT_BACKGROUND;
  const border = isShowingDetailView ? answeredBorder : normalBorder;
  const additionalStyles = !(isDisabled || isShowingDetailView) ? `cursor-pointer ${HOVER_BORDER}` : '';

  const handleSelect = React.useCallback(() => {
    onSelect(option.id);
  }, [onSelect, option.id]);

  return (
    <div
      className={`relative py-8 px-10 rounded mb-8 border-2 ${background} ${border} ${additionalStyles}`}
      onClick={handleSelect}
    >
      {isShowingDetailView && (
        <>
          {isCorrectAnswer ? (
            <CheckMark color="text-green-500 absolute top-1/2 left-1" />
          ) : (
            <XCricle color="text-red-500 absolute top-1/2 left-1" />
          )}
        </>
      )}
      <Text type="base" color={`text-${theme}-900`} additionalStyles="pl-2">
        {option.text}
      </Text>
      {isShowingDetailView && (
        <Text type="small" color={`text-${theme}-800`} additionalStyles="mt-2 pl-2">
          {option.description}
        </Text>
      )}
    </div>
  );
};

export default QuizComponent;
