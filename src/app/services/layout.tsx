import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Expert Engineering & AI Services | RayTech',
    description: 'Comprehensive software engineering, AI/ML, data engineering, cloud architecture, and digital transformation services tailored for startups and enterprises.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
