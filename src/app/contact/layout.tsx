import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | RayTech',
    description: 'Get in touch for enterprise inquiries, AI consultations, or partnership opportunities.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
