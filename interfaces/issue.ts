import Article from './article';
import DevOfTheWeek from './devOfTheWeek';
import Gif from './gif';
import Meta from './meta';
import Talk from './talk';
import TipOfTheWeek from './tipOfTheWeek';
import Tool from './tool';
import Website from './website';
import Quiz from './quiz';

export interface Issue {
  tipOfTheWeek: TipOfTheWeek;
  articles?: Article[] | null;
  tools?: Tool[] | null;
  devOfTheWeek: DevOfTheWeek;
  talks?: Talk[] | null;
  website: Website;
  gif: Gif;
  meta: Meta;
  quiz: Quiz;
}
