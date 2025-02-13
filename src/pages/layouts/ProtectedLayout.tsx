import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { ROUTES } from "constants/routes";
import { RootState } from "src/store";

export const ProtectedLayout = () => {
	const auth = useSelector((state: RootState) => state.auth);

	if (!auth.token) {
		return <Navigate to={ROUTES.login} />;
	}

	return <Outlet />;
};
