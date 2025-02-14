export interface IPagination {
	limit: number;
	skip: number;
}

export interface IListRespose extends IPagination {
	total: number;
}
