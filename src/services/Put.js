import axios from "axios";
import { RootPath } from "./Config";

export const Put = (path, data, root = RootPath) => {
	const promise = new Promise((resolve, reject) => {
		axios.put(`${root}/${path}`, data).then(
			(res) => {
				resolve(res);
			},
			(err) => {
				reject(err);
			}
		);
	});

	return promise;
};
