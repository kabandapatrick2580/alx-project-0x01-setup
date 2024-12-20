import React from "react";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
const Users: React.FC<UserProps[]> = ({ users }) => {
    console.log(users)
    return (
        <div className="flex flex-col h-screen">
        <Header />
        <main className="p-4">
            <div className="flex justify-between">
            <h1 className=" text-2xl font-semibold">User Content</h1>
            <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
                {
                    users?.map(({ name, username, email, phone, website, address, company }: UserProps, key: number) => (
                        <UserCard name={name} username={username} email={email} phone={phone} website={website} address={address} company={company} key={key} />
                    ))
                }
            </div>
        </main>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
  
    return {
      props: {
        users
      }
    }
  }
export default Users;