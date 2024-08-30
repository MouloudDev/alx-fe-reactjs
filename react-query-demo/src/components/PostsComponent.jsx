import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://api.example.com/data');
    return res.json();
};

function PostsComponent() {
    const { data, isError, isLoading, refetch } = useQuery('fetchPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: error loading posts.</div>;

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
