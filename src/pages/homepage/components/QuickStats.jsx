import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState({
        properties: 0,
        cities: 0,
        transactions: 0,
        agents: 0
    });
    const sectionRef = useRef(null);

    const stats = [
        {
            key: 'properties',
            label: 'Active Properties',
            value: 15420,
            icon: 'Building',
            suffix: '+',
            color: 'text-primary'
        },
        {
            key: 'cities',
            label: 'Cities Covered',
            value: 250,
            icon: 'MapPin',
            suffix: '+',
            color: 'text-[accent]'
        },
        {
            key: 'transactions',
            label: 'Successful Sales',
            value: 8750,
            icon: 'TrendingUp',
            suffix: '+',
            color: 'text-success'
        },
        {
            key: 'agents',
            label: 'Expert Agents',
            value: 1200,
            icon: 'Users',
            suffix: '+',
            color: 'text-warning'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateCounters = () => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 FPS
        const stepDuration = duration / steps;

        stats.forEach((stat) => {
            let currentStep = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                currentStep++;
                const currentValue = Math.min(Math.floor(increment * currentStep), stat.value);

                setAnimatedValues(prev => ({
                    ...prev,
                    [stat.key]: currentValue
                }));

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepDuration);
        });
    };

    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    return (
        <section ref={sectionRef} className="py-16 lg:py-24 bg-[#EFF6FF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 font-heading">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        Join our growing community of satisfied buyers, sellers, and agents who have found success through our platform
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.key}
                            className="text-center p-6 lg:p-8 bg-white rounded-lg shadow-sm hover:shadow-sm transition-all duration-300 ease-out hover:scale-105"
                        >
                            {/* Icon Container with Full Circle */}
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
            ${stat.key === 'properties' ? 'bg-blue-100' :
                                    stat.key === 'cities' ? 'bg-green-100' :
                                        stat.key === 'transactions' ? 'bg-purple-100' :
                                            'bg-orange-100'}`}>

                                {/* Icon with Full Circle Background */}
                                <div className={`rounded-full w-12 h-12 flex items-center justify-center
                                    ${stat.key === 'properties' ? 'bg-blue-500' :
                                        stat.key === 'cities' ? 'bg-green-500' :
                                            stat.key === 'transactions' ? 'bg-purple-500' :
                                                'bg-orange-500'}`}>

                                    <Icon
                                        name={stat.icon}
                                        size={20}
                                        className="text-white"
                                    />
                                </div>
                            </div>

                            {/* Animated Number */}
                            <div className="mb-2">
                                <span className="text-3xl lg:text-4xl font-bold text-gray-900 font-data">
                                    {formatNumber(animatedValues[stat.key])}
                                </span>
                                <span className={`text-2xl lg:text-3xl font-bold
                ${stat.key === 'properties' ? 'text-blue-600' :
                                        stat.key === 'cities' ? 'text-green-600' :
                                            stat.key === 'transactions' ? 'text-purple-600' :
                                                'text-orange-600'}`}>
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <p className="text-gray-600 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 lg:mt-16 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-12 h-12 bg-[#D1FAE5] rounded-full flex items-center justify-center">
                                <Icon name="Shield" size={24} className="text-[#059669]" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-[#1E293B]">Verified Listings</p>
                                <p className="text-sm text-[#8F9CAA]">All properties verified</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                                <Icon name="Clock" size={24} className="text-[#2563EB]" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-[#1E293B]">24/7 Support</p>
                                <p className="text-sm text-[#8F9CAA]">Always here to help</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-12 h-12 bg-[#E0F2FE] rounded-full flex items-center justify-center">
                                <Icon name="Award" size={24} className="text-[#0EA5E9]" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-[#1E293B]">Award Winning</p>
                                <p className="text-sm text-[#8F9CAA]">Industry recognized</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickStats;