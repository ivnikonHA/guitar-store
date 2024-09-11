import { getIsAuthorized } from '../store/user/user-selectors';
import { useAppSelector } from './use-app-selector';

export const useAuth = () => useAppSelector(getIsAuthorized);
