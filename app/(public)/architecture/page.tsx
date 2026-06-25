import { ArchitectureClient } from './architecture-client';

export const metadata = {
  title: 'Architecture — Shane Turon',
  description: 'System maps, technical infrastructure overview, and deployment topology.',
};

export default function ArchitecturePage() {
  return <ArchitectureClient />;
}
