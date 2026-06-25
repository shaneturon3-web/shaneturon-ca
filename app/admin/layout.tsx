import { AdminLayoutClient } from './admin-layout-client';

export const metadata = { title: 'Dashboard — Shane Turon' };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
