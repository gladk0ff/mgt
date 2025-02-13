import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			pages: path.resolve(__dirname, "src/pages/"),
			components: path.resolve(__dirname, "src/components/"),
			servicies: path.resolve(__dirname, "src/servicies/"),
			types: path.resolve(__dirname, "src/types/"),
			constants: path.resolve(__dirname, "src/constants/"),
			slices: path.resolve(__dirname, "src/slices/"),
			src: path.resolve(__dirname, "src/"),
		},
	},
});
