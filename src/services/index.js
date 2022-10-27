import { Get } from "./Get";
import { Post } from "./Post";
import { Put } from "./Put";
import { Delete } from "./Delete";

//POST
const postNewsBlog = (data) => Post(`posts`, data);

//GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc");
const getComments = () =>
	Get("", "https://jsonplaceholder.typicode.com/comments");

//PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, data);

//DELETE
const deleteNewsBlog = (id) => Delete("posts", id);

const API = {
	getNewsBlog,
	getComments,
	postNewsBlog,
	updateNewsBlog,
	deleteNewsBlog,
};

export default API;
