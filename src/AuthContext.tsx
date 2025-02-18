import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { authService } from "servicies/authService";
import { tokenService } from "servicies/tokenService";
import { IUserToken } from "types/auth";

interface IAuthContext {
	userToken: IUserToken | null;
	isAuthCheking: boolean;
	login(data: IUseLoginInfo): Promise<void>;
	logOut(): void;
	isLoading: boolean;
	loginError: string | null;
}

interface IUseLoginInfo {
	username: string;
	password: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuthCheking, setIsAuthCheking] = useState<boolean>(true);
	const [userToken, setUserToken] = useState<IUserToken | null>(null);
	const [isLoading, setLoading] = useState(false);
	const [loginError, setLoginError] = useState<string | null>(null);

	useEffect(() => {
		const token = tokenService.getToken();
		if (token) {
			setUserToken(token);
		}
		setIsAuthCheking(false);
	}, []);

	const login = async (data: IUseLoginInfo) => {
		setLoading(true);
		try {
			const userToken = await authService.login(data);
			setUserToken(userToken);
			tokenService.saveToken(userToken);
		} catch (error) {
			const msg = "Не удалось залогиниться";
			setLoginError(msg);
			console.error(msg, JSON.stringify(error));
		} finally {
			setLoading(false);
		}
	};

	const logOut = () => {
		tokenService.destroyToken();
		// authService.logout();
		setUserToken(null);
	};

	const value = {
		isAuthCheking,
		userToken,
		isLoading,
		login,
		loginError,
		logOut,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
