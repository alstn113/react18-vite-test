import { atom } from 'recoil';

export interface IText {
  text: string;
}

export const textState = atom<IText>({
  key: 'textState ',
  default: {
    text: '',
  },
});
