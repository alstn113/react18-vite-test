import styled, { css } from 'styled-components';
import AuthForm from '../AuthForm';

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

const AuthModal = ({ visible, onClose }: AuthModalProps) => {
  return (
    <AuthModalWrapper visible={visible}>
      <div>AuthModal</div>
      <button onClick={onClose}>버튼</button>
      <AuthForm />
    </AuthModalWrapper>
  );
};

const AuthModalWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ${(props) =>
    props.visible
      ? css`
          background-color: rgba(0, 0, 0, 0.1);
        `
      : css`
          visibility: hidden;
        `}
`;

export default AuthModal;
