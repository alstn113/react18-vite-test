import useGetAllArticle from '../../hooks/query/article/useGetAllArticles';

const ArticleList = () => {
  const { data } = useGetAllArticle();
  return (
    <div>
      {data?.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
};

export default ArticleList;
