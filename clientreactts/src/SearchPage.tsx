/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionData';
import React from 'react';
import { Page } from './Page';
import { QuestionPage } from './QuestionPage';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [questions, SetQuestions] = React.useState<QuestionData[]>([]);
  const search = searchParams.get('criteria') || '';
  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      SetQuestions(foundResults);
    };
    doSearch(search);
  }, [search]);
  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};