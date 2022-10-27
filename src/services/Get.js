import axios from "axios";
import { RootPath } from "./Config";

export const Get = (path, root = RootPath) => {
	const promise = new Promise((resolve, reject) => {
		axios.get(`${root}/${path}`).then(
			(res) => {
				resolve(res.data);
			},
			(err) => {
				reject(err);
			}
		);
	});

	return promise;
};
