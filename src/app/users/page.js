"use client"

import { useEffect, useState } from "react"

import React from 'react'

const Users = () => {
    const [users,setUsers] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    const getUserData = async ()=>{
        setLoading(true)
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")

            const data  = await response.json()
            response.ok ? setUsers(data) : setError(data)



        }catch(error){
            console.error(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getUserData()
    
    }, [])
    



  return (
    error ? <div>{error}</div>:
        loading ? <div>Loading...</div>:
            <div>{JSON.stringify(users)}</div>
  )
}

export default Users