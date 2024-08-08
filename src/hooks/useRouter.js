import { usePathname } from 'next/navigation';

export const useCustomRouter = () => {
  const currentPath = usePathname();

  return { currentPath };
};

