import { atom } from 'recoil';

interface IAuthModal {
  visible: boolean;
}

export const authModalState = atom<IAuthModal>({
  key: 'authModalState',
  default: {
    visible: false,
  },
});
