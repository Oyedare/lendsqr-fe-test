"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }else{
        router.push('/users');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
}
