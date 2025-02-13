import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ROUTES } from "constants/routes";
import { Navigate, Outlet } from "react-router";
import { Flex } from "antd";

export const AuthLayout = () => {
	const auth = useSelector((state: RootState) => state.auth);

	if (auth.token) {
		return <Navigate to={ROUTES.base} />;
	}

	return (
		<Flex flex={1} align="center" justify="center" style={{ width: "100%" }}>
			<Outlet />
		</Flex>
	);
};
