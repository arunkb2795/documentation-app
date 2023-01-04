import { useState } from 'react';
import React from 'react'

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 }
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState("");
    const [selectedUser, setSelectedUser] = useState<{ name: string, age: number } | undefined>()

    const onClick = () => {
        let foundUser = users.find((user) => user.name === name)
        setSelectedUser(foundUser)
    }

    return (
        <>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Search User</button>
            User Details
            {selectedUser && selectedUser.name}
            {selectedUser&&selectedUser.age}
        </>
    )
}

export default UserSearch;
