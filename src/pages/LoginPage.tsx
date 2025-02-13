import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Alert, FormProps, Flex } from "antd";
import { loginUser } from "slices/authSlice";
import { AppDispatch, RootState } from "src/store";
import { FORM_ERRORS } from "constants/form";

interface ILoginForm {
	username: string;
	password: string;
}

const AUTH_DATA = [
	{
		username: "emilys",
		password: "emilyspass",
	},
];

export const LoginPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { login } = useSelector((state: RootState) => state.auth);

	const onFormSubmit: FormProps<ILoginForm>["onFinish"] = ({ username, password }) => {
		if (!username || !password) return;
		dispatch(loginUser({ username, password }));
	};

	return (
		<Flex gap={16} vertical>
			<Form layout="vertical" onFinish={onFormSubmit}>
				<h2>Логин</h2>
				{login.error && <Alert message={login.error} type="error" />}
				<Form.Item name="username" label="Логин" rules={[{ required: true, message: FORM_ERRORS.REQUIRED }]}>
					<Input size="large" type="text" />
				</Form.Item>
				<Form.Item name="password" label="Пароль" rules={[{ required: true, message: FORM_ERRORS.REQUIRED }]}>
					<Input.Password size="large" type="password" />
				</Form.Item>
				<Form.Item style={{ textAlign: "center" }}>
					<Button type="primary" htmlType="submit" loading={login.isLoading}>
						Войти
					</Button>
				</Form.Item>
			</Form>
			<Flex>
				<pre>{JSON.stringify(AUTH_DATA)}</pre>
			</Flex>
		</Flex>
	);
};
