import { Spin } from "antd";
import { Route, Routes } from "react-router";
import { AuthLayout } from "pages/layouts/AuthLayout";
import { ROUTES } from "constants/routes";
import { ProtectedLayout } from "pages/layouts/ProtectedLayout";
import { LoginPage } from "pages/LoginPage";
import { CountPage } from "pages/CountPage";
import { MainLayout } from "pages/layouts/main/MainLayout";
import { NotFoundPage } from "pages/NotFoundPage";
import { HomePage } from "pages/HomePage";
import { UsersPage } from "pages/UsersPage";
import { useAuth } from "./AuthContext";

import "./App.css";

function App() {
	const { isAuthCheking } = useAuth();

	if (isAuthCheking) return <Spin fullscreen />;

	return (
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
	);
}

export default App;
