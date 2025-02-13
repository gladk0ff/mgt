import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Spin } from "antd";
import { useEffect } from "react";
import { authActions } from "slices/authSlice";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthLayout } from "pages/layouts/AuthLayout";
import { ROUTES } from "constants/routes";
import { ProtectedLayout } from "pages/layouts/ProtectedLayout";
import { LoginPage } from "pages/LoginPage";
import { CountPage } from "pages/CountPage";
import { setApiAuthorizationHeader } from "servicies/client";
import { tokenService } from "servicies/token";

import "./App.css";

function App() {
	const { token, isAuthCheking } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) {
			dispatch(authActions.chekAuth());
		} else {
			tokenService.saveToken(token);
			setApiAuthorizationHeader(token.accessToken);
		}
	}, [token]);

	if (isAuthCheking) return <Spin fullscreen />;

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path={ROUTES.login} element={<LoginPage />} />
				</Route>
				<Route element={<ProtectedLayout />}>
					<Route path={ROUTES.base} element={<CountPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
