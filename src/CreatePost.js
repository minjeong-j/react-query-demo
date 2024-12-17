import { useMutation } from '@tanstack/react-query';

function createPost(newPost) {
	return fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
        	'Content-Type': 'application/json', 
		}, 
        body: JSON.stringify(newPost),
    }).then((res) => res.json());
}

function CreatePost() {
	// const mutation = useMutation(createPost);
    
    const mutation = useMutation({
        mutationFn: createPost, // 데이터 생성 함수
    });

	const handleCreate = () => {
		mutation.mutate({ title: 'New Post', body: 'This is a new post' });
	};
    
    return (
	<div>
		<button onClick={handleCreate}>Create Post</button>
		{mutation.isLoading && <p>Creating post...</p>}
		{mutation.isSuccess && <p>Post created!</p>}
	</div>
    );
}

export default CreatePost;