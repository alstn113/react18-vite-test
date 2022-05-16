import { useRecoilState } from 'recoil';
import useGetAllArticle from '../../hooks/query/article/useGetAllArticles';
import { authModalState } from '../../store/modal';

const ArticleList = () => {
  const { data } = useGetAllArticle();

  // recoil auth modal test
  const [authModal, setAuthModal] = useRecoilState(authModalState);
  const openAuthModal = () => {
    setAuthModal({ visible: true });
  };
  return (
    <div>
      <div>{authModal.visible}</div>
      <div>
        <button onClick={openAuthModal}>open modal</button>
      </div>
      {data?.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
};

export default ArticleList;
