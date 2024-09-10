import { AuthorizationStatus, NameSpace } from '../../consts';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
const getIsAuthorized = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
const getUserData = (state: State): UserData => state[NameSpace.User].userData;

export { getAuthorizationStatus, getIsAuthorized, getUserData };
