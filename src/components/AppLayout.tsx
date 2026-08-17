import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'

export function AppLayout() {
  return (
    <div className="mx-auto min-h-full max-w-md bg-bg pb-20">
      <Outlet />
      <BottomNav />
    </div>
  )
}
