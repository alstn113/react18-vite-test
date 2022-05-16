import GlobalStyle from '../../styles/global-style';
import AuthModalContainer from '../auth/AuthModalContainer';
import AuthProvider from '../auth/AuthProvider';

const Core = () => {
  AuthProvider();
  return (
    <>
      <GlobalStyle />
      <AuthModalContainer />
    </>
  );
};

export default Core;
