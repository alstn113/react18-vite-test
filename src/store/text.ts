import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const textCountState = selector({
  key: 'textCountState',
  get: ({ get }): number => {
    const text: string = get(textState);

    return text.length;
  },
});
