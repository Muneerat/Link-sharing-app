"use client"
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export const Demo = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function getUser(){
            const supabase = createClient()
            const {data,error} = await supabase.auth.getUser()
            if(error || !data?.user){
            console.log('no user');
            }else{
                setUser(data.user)
            }
        }
        getUser()
    },[])
  return (
    <div>Demo</div>
  )
}
