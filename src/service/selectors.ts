import { RootState } from "./store";

export const getLoginError = (state: RootState) =>
    state.auth.error;

export const getAuthStatus = (state: RootState) =>
    state.auth.isAuthenticated;

export const getUserInfo = (state: RootState) =>
    state.auth.userInfo;

export const getExtraUsersInfo = (state: RootState) =>
    state.auth.extraUserInfo;

export const getIsMenuOpen = (state: RootState) =>
    state.headerMenu.isMenuOpen;

export const getUserMessagesCount = (state: RootState) =>
    state.auth.userInfo?.messages;

export const getCurrentLang = (state: RootState) =>
    state.lang.currentLang;