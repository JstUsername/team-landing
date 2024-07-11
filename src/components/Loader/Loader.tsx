/// <reference types="vite-plugin-svgr/client" />
import { ArticleLoad, ArticleLoadCenter, ArticleLoadBox } from './Loader.styled';
import TLoadSvg from '../../assets/articles/T.svg?react';

const Loader = () => {
  return (
    <ArticleLoad>
      <ArticleLoadBox>
        <ArticleLoadCenter>
          <TLoadSvg />
        </ArticleLoadCenter>
      </ArticleLoadBox>
    </ArticleLoad>
  );
};

export default Loader;
