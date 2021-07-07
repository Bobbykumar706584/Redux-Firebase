/** @format */

export const createProject = (project) => {
	return (dispatch, getState, { gitFirebase, getFirestore }) => {
		//make a async call to database
		const firestore = getFirestore();
		firestore
			.collection("projects")
			.add({
				...project,
				authorFirstName: "Bobby",
				authorLastName: "Kumar",
				authorId: 1234,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: "CREATE_PROJECT", project });
			})
			.catch((err) => {
				dispatch({ type: "CREATE_PROJECT_ERROR", err });
			});
	};
};
