import { Suspense } from 'react';
import ArticleList from '../../components/ArticleList';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ArticleList />
    </Suspense>
  );
};

export default HomePage;
