import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

function PostsComponent() {
    const { data, isError, isLoading, refetch } = useQuery('fetchPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div>
            <button onClick={refetch}>Refetch Data</button>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default PostsComponent;
