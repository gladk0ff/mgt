import { Flex, Table, TableColumnsType } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "slices/usersSlice";
import { AppDispatch, RootState } from "src/store";
import { IUser } from "types/users";

const COLUMNS: TableColumnsType<IUser> = [
	{
		title: "Имя",
		width: 200,
		dataIndex: "firstName",
		fixed: "left",
	},
	{
		title: "Age",
		width: 100,
		dataIndex: "age",
		fixed: "left",
	},
	{
		title: "Имейл",
		dataIndex: "email",
		width: 300,
	},
];
export const UsersPage = () => {
	const { isLoading, users, pagination, total } = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (users.length) return;
		dispatch(getUsers());
	}, [dispatch, users]);

	const handlePaginationChange = (current: number, pageSize: number) => {
		dispatch(getUsers({ skip: current * pageSize, limit: pageSize }));
	};

	const currentPage = pagination?.skip && pagination?.limit ? pagination?.skip / pagination?.limit : 1;

	return (
		<Flex className="table-wrapper users-container">
			<Table
				columns={COLUMNS}
				dataSource={users}
				loading={isLoading}
				rowKey="id"
				pagination={{
					pageSize: pagination?.limit || 10,
					current: currentPage,
					total: total,
					position: ["topRight"],
					onChange: handlePaginationChange,
					pageSizeOptions: [5, 10],
				}}
			/>
		</Flex>
	);
};
