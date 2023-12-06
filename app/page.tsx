import Image from 'next/image'
import styles from '../styles/page.module.scss'
import ProtectedRoute from '@/utils/checkAuth'
export default function Home() {
  return (
    <ProtectedRoute>
      <h1>Homepage</h1>
    </ProtectedRoute>
  )
}
