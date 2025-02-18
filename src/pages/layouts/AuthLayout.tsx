import { ROUTES } from "constants/routes";
import { Navigate, Outlet } from "react-router";
import { Flex } from "antd";
import { useAuth } from "src/AuthContext";

export const AuthLayout = () => {
	const { userToken } = useAuth();

	if (userToken) {
		return <Navigate to={ROUTES.base} />;
	}

	return (
		<Flex flex={1} align="center" justify="center" style={{ width: "100%" }}>
			<Outlet />
		</Flex>
	);
};
