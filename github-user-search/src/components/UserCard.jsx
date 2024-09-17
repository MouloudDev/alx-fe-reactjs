import React from 'react';

function UserCard({ data }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto my-4">
            <div className="flex items-center p-4">
                <img
                    src={data.avatar_url}
                    alt={data.login}
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{data.login}</h2>
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
            <div className="bg-gray-100 p-4">
                <p className="text-gray-600 text-sm">
                    <strong>Public Repos:</strong> {data.public_repos}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Public Gists:</strong> {data.public_gists}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Followers:</strong> {data.followers}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Following:</strong> {data.following}
                </p>
            </div>
        </div>
    );
}

export default UserCard;
