import { Flex, Table, TableColumnsType } from "antd";
import { useEffect, useState } from "react";
import { usersService } from "servicies/userServicie";
import { IPagination } from "types/common";
import { IUser } from "types/users";

export const UsersPage = () => {
	const [isLoading, setLoading] = useState(false);
	const [users, setUsers] = useState<IUser[]>([]);
	const [pagination, setPagination] = useState<IPagination & { total: number }>({ total: 0, skip: 0 });

	const getUsers = async (data?: IPagination) => {
		setLoading(true);
		try {
			const { skip, total, users, limit } = await usersService.getAll(data);
			setPagination({ skip, total, limit });
			setUsers(users);
		} catch (error) {
			console.error("Не удалось загрузить пльзователей", JSON.stringify(error));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handlePaginationChange = (current: number, pageSize: number) => {
		getUsers({ skip: (current - 1) * pageSize, limit: pageSize });
	};

	const currentPage = pagination?.skip && pagination?.limit ? pagination.skip / pagination.limit + 1 : 1;

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
					total: pagination.total,
					position: ["topRight"],
					onChange: handlePaginationChange,
					pageSizeOptions: [5, 10],
				}}
			/>
		</Flex>
	);
};

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
