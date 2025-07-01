'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: React.ComponentProps<typeof Component>) {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn || isLoggedIn !== 'true') {
        router.push('/login');
      }
    }, [router]);

    return <Component {...props} />;
  };
}
