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
import { tokenService } from "servicies/tokenService";
import { MainLayout } from "pages/layouts/main/MainLayout";
import { NotFoundPage } from "pages/NotFoundPage";
import { HomePage } from "pages/HomePage";

import "./App.css";
import { UsersPage } from "pages/UsersPage";

function App() {
	const { token, isAuthCheking } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) {
			dispatch(authActions.chekAuth());
		} else {
			tokenService.saveToken(token);
		}
	}, [dispatch, token]);

	if (isAuthCheking) return <Spin fullscreen />;

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path={ROUTES.login} element={<LoginPage />} />
				</Route>
				<Route element={<ProtectedLayout />}>
					<Route element={<MainLayout />}>
						<Route path={ROUTES.base} element={<HomePage />} />
						<Route path={ROUTES.counter} element={<CountPage />} />
						<Route path={ROUTES.users} element={<UsersPage />} />
						{/* Маршрут для обработки неизвестных URL */}
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
