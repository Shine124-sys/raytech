import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import TechStackSection from '@/components/TechStackSection';
import WhyUsSection from '@/components/WhyUsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
    return (
        <main className="bg-transparent min-h-screen">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <IndustriesSection />
            <TechStackSection />
            <WhyUsSection />
            <CaseStudiesSection />
            <ContactSection />
        </main>
    );
}
