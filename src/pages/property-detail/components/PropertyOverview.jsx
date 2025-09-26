// src/pages/property-details/components/PropertyOverview.jsx
import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PropertyOverview = ({
    property,
    isSaved,
    onSave,
    onShare,
    onContact
}) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    const getPropertyAge = (yearBuilt) => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - yearBuilt;
        return age === 0 ? 'New Construction' : `${age} years old`;
    };

    return (
        <div className="card p-6 border-[#E2E8F0] shadow-md rounded-md">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                        <h1 className="text-2xl lg:text-3xl font-bold text-text-[#2563EB]">
                            {property?.title}
                        </h1>
                        {property?.daysOnMarket <= 7 && (
                            <span className="bg-[#059669] text-white px-2 py-1 rounded-md text-xs font-medium">
                                New
                            </span>
                        )}
                    </div>

                    <p className="text-3xl lg:text-4xl font-bold text-[#2563EB] mb-3">
                        {formatPrice(property?.price)}
                    </p>

                    <div className="flex items-center space-x-2 text-text-secondary mb-4">
                        <Icon name="MapPin" size={16} />
                        <span>{property?.address}</span>
                    </div>

                    {property?.mls && (
                        <p className="text-sm text-text-secondary">
                            MLS: {property.mls}
                        </p>
                    )}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-3">
                    <button
                        onClick={onSave}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${isSaved
                            ? 'bg-[#DC2626] text-white' : 'bg-[#F1F5F9] text-text-secondary hover:bg-[#DC2626] hover:text-white'
                            }`}
                    >
                        <Icon name="Heart" size={18} fill={isSaved ? "currentColor" : "none"} />
                        <span>{isSaved ? 'Saved' : 'Save'}</span>
                    </button>

                    <button
                        onClick={onShare}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#F1F5F9] text-text-secondary rounded-md hover:bg-[#E2E8F0] transition-all duration-200"
                    >
                        <Icon name="Share" size={18} />
                        <span>Share</span>
                    </button>

                    <button
                        onClick={onContact}
                        className="flex items-center space-x-2 px-6 py-2 bg-[#2563EB] text-white rounded-md hover:bg-[#1D4ED8] transition-all duration-200"
                    >
                        <Icon name="MessageCircle" size={18} />
                        <span>Contact Agent</span>
                    </button>
                </div>
            </div>

            {/* Property Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                <div className="text-center p-3 bg-[#FAFAFA] rounded-md">
                    <Icon name="Bed" size={24} className="text-[#2563EB] mx-auto mb-2" />
                    <p className="text-lg font-semibold text-text-[#2563EB]">{property?.bedrooms}</p>
                    <p className="text-sm text-text-secondary">Bedrooms</p>
                </div>

                <div className="text-center p-3 bg-[#FAFAFA] rounded-md">
                    <Icon name="Bath" size={24} className="text-[#2563EB] mx-auto mb-2" />
                    <p className="text-lg font-semibold text-text-[#2563EB]">{property?.bathrooms}</p>
                    <p className="text-sm text-text-secondary">Bathrooms</p>
                </div>

                <div className="text-center p-3 bg-[#FAFAFA] rounded-md">
                    <Icon name="Square" size={24} className="text-[#2563EB] mx-auto mb-2" />
                    <p className="text-lg font-semibold text-text-[#2563EB]">{formatNumber(property?.sqft)}</p>
                    <p className="text-sm text-text-secondary">Sq Ft</p>
                </div>

                {property?.yearBuilt && (
                    <div className="text-center p-3 bg-[#FAFAFA] rounded-md">
                        <Icon name="Calendar" size={24} className="text-[#2563EB] mx-auto mb-2" />
                        <p className="text-lg font-semibold text-text-[#2563EB]">{property.yearBuilt}</p>
                        <p className="text-sm text-text-secondary">Built</p>
                    </div>
                )}

                {property?.parkingSpaces > 0 && (
                    <div className="text-center p-3 bg-[#FAFAFA] rounded-md">
                        <Icon name="Car" size={24} className="text-[#2563EB] mx-auto mb-2" />
                        <p className="text-lg font-semibold text-text-[#2563EB]">{property.parkingSpaces}</p>
                        <p className="text-sm text-text-secondary">Parking</p>
                    </div>
                )}

                <div className="text-center p-3 bg-[#FAFAFA] rounded-md">
                    <Icon name="Clock" size={24} className="text-[#2563EB] mx-auto mb-2" />
                    <p className="text-lg font-semibold text-text-[#2563EB]">{property?.daysOnMarket}</p>
                    <p className="text-sm text-text-secondary">Days on Market</p>
                </div>
            </div>

            {/* Property Type & Quick Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                    <Icon name="Home" size={16} className="text-text-secondary" />
                    <span className="text-text-secondary">Type:</span>
                    <span className="font-medium text-text-[#2563EB] capitalize">{property?.propertyType}</span>
                </div>

                {property?.yearBuilt && (
                    <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} className="text-text-secondary" />
                        <span className="text-text-secondary">Age:</span>
                        <span className="font-medium text-text-[#2563EB]">{getPropertyAge(property.yearBuilt)}</span>
                    </div>
                )}

                {property?.lotSize && (
                    <div className="flex items-center space-x-2">
                        <Icon name="Square" size={16} className="text-text-secondary" />
                        <span className="text-text-secondary">Lot Size:</span>
                        <span className="font-medium text-text-[#2563EB]">{formatNumber(property.lotSize)} sq ft</span>
                    </div>
                )}
            </div>

            {/* Agent Quick Info - Mobile Only */}
            <div className="lg:hidden mt-6 pt-6 border-t border-[#E2E8F0]">
                <div className="flex items-center space-x-4">
                    <Image
                        src={property?.agent?.avatar}
                        alt={property?.agent?.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold text-text-[#2563EB]">{property?.agent?.name}</h3>
                        <div className="flex items-center space-x-1">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Icon
                                        key={i}
                                        name="Star"
                                        size={12}
                                        className={i < Math.floor(property?.agent?.rating || 0) ? 'text-[#D97706] fill-current' : 'text-[#CBD5E1]'}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-[#CBD5E1]">
                                {property?.agent?.rating} ({property?.agent?.reviewsCount} reviews)
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onContact}
                        className="px-4 py-2 bg-[#2563EB] text-white rounded-md text-sm font-medium hover:bg-[#1D4ED8] transition-all duration-200"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyOverview;