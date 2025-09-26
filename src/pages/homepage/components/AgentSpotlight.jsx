import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AgentSpotlight = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const topAgents = [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "Senior Real Estate Agent",
            photo: "https://randomuser.me/api/portraits/women/32.jpg",
            rating: 4.9,
            reviewCount: 127,
            salesCount: 89,
            specialties: ["Luxury Homes", "First-Time Buyers"],
            location: "Manhattan, NY",
            phone: "+1 (555) 123-4567",
            email: "sarah.johnson@estatehub.com",
            bio: `Sarah has been helping families find their dream homes in Manhattan for over 8 years. Her expertise in luxury properties and dedication to client satisfaction has earned her numerous industry awards.`,
            achievements: ["Top 1% Agent 2023", "Customer Choice Award", "Luxury Specialist"]
        },
        {
            id: 2,
            name: "Michael Chen",
            title: "Real Estate Specialist",
            photo: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: 4.8,
            reviewCount: 94,
            salesCount: 67,
            specialties: ["Investment Properties", "Commercial Real Estate"],
            location: "Austin, TX",
            phone: "+1 (555) 234-5678",
            email: "michael.chen@estatehub.com",
            bio: `Michael specializes in investment properties and has helped countless clients build their real estate portfolios. His analytical approach and market knowledge make him a trusted advisor.`,
            achievements: ["Investment Expert 2023", "Rising Star Award", "Market Analyst"]
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            title: "Luxury Property Consultant",
            photo: "https://randomuser.me/api/portraits/women/28.jpg",
            rating: 5.0,
            reviewCount: 156,
            salesCount: 112,
            specialties: ["Waterfront Properties", "Luxury Condos"],
            location: "Miami, FL",
            phone: "+1 (555) 345-6789",
            email: "elena.rodriguez@estatehub.com",
            bio: `Elena is Miami's premier luxury property consultant, specializing in waterfront estates and high-end condominiums. Her bilingual skills and cultural expertise serve diverse clientele.`,
            achievements: ["Luxury Leader 2023", "Multilingual Expert", "Waterfront Specialist"]
        },
        {
            id: 4,
            name: "David Kim",
            title: "Residential Sales Expert",
            photo: "https://randomuser.me/api/portraits/men/33.jpg",
            rating: 4.7,
            reviewCount: 83,
            salesCount: 54,
            specialties: ["Family Homes", "Eco-Friendly Properties"],
            location: "Portland, OR",
            phone: "+1 (555) 456-7890",
            email: "david.kim@estatehub.com",
            bio: `David focuses on sustainable and family-friendly properties in Portland. His commitment to environmental responsibility and community values resonates with eco-conscious buyers.`,
            achievements: ["Green Building Expert", "Family Advocate", "Community Leader"]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % topAgents.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + topAgents.length) % topAgents.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Icon key={i} name="Star" size={16} className="text-[#D97706]" fill="currentColor" />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <Icon key="half" name="Star" size={16} className="text-[#D97706]" fill="currentColor" />
            );
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <Icon key={`empty-${i}`} name="Star" size={16} className="text-[#CBD5E1]" />
            );
        }

        return stars;
    };

    return (
        <section className="py-16 lg:py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 font-heading">
                        Meet Our Top Agents
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        Work with industry-leading professionals who are committed to helping you achieve your real estate goals
                    </p>
                </div>

                {/* Agent Carousel */}
                <div className="relative">
                    <div className="overflow-hidden" ref={carouselRef}>
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {topAgents.map((agent) => (
                                <div key={agent.id} className="w-full flex-shrink-0">
                                    <div className="max-w-4xl mx-auto">
                                        <div className="bg-[#FFFFFF] rounded-lg shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
                                            <div className="md:flex">
                                                {/* Agent Photo */}
                                                <div className="md:w-1/3">
                                                    <div className="h-64 md:h-full relative">
                                                        <Image
                                                            src={agent.photo}
                                                            alt={agent.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                    </div>
                                                </div>

                                                {/* Agent Details */}
                                                <div className="md:w-2/3 p-6 lg:p-8">
                                                    <div className="flex flex-col h-full">
                                                        {/* Header */}
                                                        <div className="mb-4">
                                                            <h3 className="text-2xl font-bold text-[#1E293B] mb-1">
                                                                {agent.name}
                                                            </h3>
                                                            <p className="text-[#2563EB] font-medium mb-2">{agent.title}</p>
                                                            <p className="text-[#64748B] flex items-center">
                                                                <Icon name="MapPin" size={16} className="mr-1" />
                                                                {agent.location}
                                                            </p>
                                                        </div>

                                                        {/* Rating & Stats */}
                                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                                            <div className="flex items-center space-x-1">
                                                                {renderStars(agent.rating)}
                                                                <span className="ml-2 text-sm text-[#64748B]">
                                                                    {agent.rating} ({agent.reviewCount} reviews)
                                                                </span>
                                                            </div>
                                                            <div className="text-sm text-[#64748B]">
                                                                <span className="font-semibold text-[#738192]">{agent.salesCount}</span> sales
                                                            </div>
                                                        </div>

                                                        {/* Specialties */}
                                                        <div className="mb-4">
                                                            <p className="text-sm font-medium text-[#738192] mb-2">Specialties:</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {agent.specialties.map((specialty) => (
                                                                    <span
                                                                        key={specialty}
                                                                        className="px-3 py-1 bg-[#DBEAFE] text-[#738192] text-xs rounded-full"
                                                                    >
                                                                        {specialty}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Bio */}
                                                        <div className="mb-6 flex-grow">
                                                            <p className="text-[#64748B] leading-relaxed">
                                                                {agent.bio}
                                                            </p>
                                                        </div>

                                                        {/* Achievements */}
                                                        <div className="mb-6">
                                                            <p className="text-sm font-medium text-[#738192] mb-2">Achievements:</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {agent.achievements.map((achievement) => (
                                                                    <span
                                                                        key={achievement}
                                                                        className="px-2 py-1 bg-[#D1FAE5] text-[#059669] text-xs rounded"
                                                                    >
                                                                        <Icon name="Award" size={12} className="inline mr-1" />
                                                                        {achievement}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Contact Actions */}
                                                        <div className="flex flex-col sm:flex-row gap-3">
                                                            <button className="flex-1 bg-[#2563EB] text-white px-4 py-2 rounded-md font-medium
                                               hover:bg-[#1D4ED8] transition-all duration-200 ease-out micro-interaction">
                                                                <Icon name="MessageCircle" size={16} className="inline mr-2" />
                                                                Contact Agent
                                                            </button>
                                                            <button className="flex-1 bg-[#E0F2FE] text-[#0284C7] px-4 py-2 rounded-md font-medium hover:bg-[#0EA5E9] hover:text-white transition-all duration-200 ease-out micro-interaction">
                                                                <Icon name="Phone" size={16} className="inline mr-2" />
                                                                Call Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#FFFFFF] 
                     rounded-full shadow-elevation-2 flex items-center justify-center
                     hover:bg-[#F1F5F9] transition-all duration-200 ease-out micro-interaction"
                        aria-label="Previous agent"
                    >
                        <Icon name="ChevronLeft" size={24} className="text-[#738192]" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#FFFFFF] 
                     rounded-full shadow-elevation-2 flex items-center justify-center
                     hover:bg-[#F1F5F9] transition-all duration-200 ease-out micro-interaction"
                        aria-label="Next agent"
                    >
                        <Icon name="ChevronRight" size={24} className="text-[#738192]" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {topAgents.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                    ? 'bg-[#2563EB] scale-110' : 'bg-[#CBD5E1] hover:bg-[#475569]'
                                    }`}
                                aria-label={`Go to agent ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* View All Agents Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/agent-dashboard"
                        className="inline-flex items-center px-8 py-3 bg-[#F1F5F9] text-[#738192] rounded-md font-semibold
                     hover:bg-[#E2E8F0] focus:ring-2 focus:ring-[#475569] focus:ring-offset-2
                     transition-all duration-200 ease-out micro-interaction"
                    >
                        View All Agents
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AgentSpotlight;