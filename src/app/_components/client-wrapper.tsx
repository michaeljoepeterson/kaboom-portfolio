'use client';

import { useState, useEffect } from "react";

/**
 * @returns 
 */
export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const [hasMounted, setHasMounted] = useState(false);
  
    useEffect(() => {
      setHasMounted(true);
    }, []);
  
    if (!hasMounted) {
      return null;
    }
  
    return <>{children}</>;
};

export default ClientWrapper;