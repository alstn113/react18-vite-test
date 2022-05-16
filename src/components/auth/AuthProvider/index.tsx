import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import useGetCurrentUser from '../../../hooks/query/auth/useGetCurrentUser';
import { userState } from '../../../store/user';

const AuthProvider = () => {
  const { data: getCurrentUser } = useGetCurrentUser();
  const user = getCurrentUser ?? undefined;
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    if (user === undefined) return;
    if (user === null) return;
    setUser({ user: user.username });
  }, [user, setUser]);
};

export default AuthProvider;
