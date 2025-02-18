import { Navigate, Outlet } from "react-router";
import { ROUTES } from "constants/routes";
import { useAuth } from "src/AuthContext";

export const ProtectedLayout = () => {
	const { userToken } = useAuth();

	if (!userToken) {
		return <Navigate to={ROUTES.login} />;
	}

	return <Outlet />;
};
