/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PrimaryButton } from './Styles';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
  AppState,
} from './Store';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());
      const unansweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
    };
    doGetUnansweredQuestions();
  }, [dispatch]);

  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    console.log('TODO - move the AskPage');
    navigate('ask');
  };
  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading ... </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
