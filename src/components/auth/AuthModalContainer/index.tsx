import { useRecoilState } from 'recoil';
import { authModalState } from '../../../store/modal';
import AuthModal from '../AuthModal';

const AuthModalContainer = () => {
  const [authModal, setAuthModal] = useRecoilState(authModalState);
  const onClose = () => {
    setAuthModal({ visible: false });
  };
  return (
    <>
      <AuthModal visible={authModal.visible} onClose={onClose} />
    </>
  );
};

export default AuthModalContainer;
