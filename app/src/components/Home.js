import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function Home() {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}
