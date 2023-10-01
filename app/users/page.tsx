import Link from 'next/link'
import React from 'react'

interface User {
    id: number;
    name: String;
    email: String;
}

const Users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
        <>
            <h1>Users page</h1>
            <main className='flex flex-wrap gap-2 my-4'>
                {users.map((user: User) => {
                    return (
                        <div key={user.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-end px-4 pt-4">
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                            </div>
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default Users