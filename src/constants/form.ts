export const FORM_ERRORS = {
	REQUIRED: "Поле обязательно",
	MIN_LENGTH: (min: number) => `Минимальная длина ${min} символов`,
	MAX_LENGTH: (max: number) => `Максимальная длина ${max} символов`,
	CYRILLIC: "Недопустимые символы,только кирилица",
};
