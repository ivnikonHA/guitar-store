import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import LoadingPage from '../../pages/loading-page/loading-page';
import { getAuthorizationStatus } from '../../store/user/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({
  children,
}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingPage />;
  }
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Root} />
  );
}
