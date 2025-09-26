// src/pages/agent-dashboard/components/PerformanceMetrics.jsx
import React from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
    const metrics = [
        {
            id: 'listings',
            title: 'Active Listings',
            value: '24',
            change: '+3',
            changeType: 'increase',
            icon: 'Home',
            color: 'primary'
        },
        {
            id: 'leads',
            title: 'New Leads',
            value: '18',
            change: '+5',
            changeType: 'increase',
            icon: 'Users',
            color: 'accent'
        },
        {
            id: 'closings',
            title: 'This Month Closings',
            value: '7',
            change: '+2',
            changeType: 'increase',
            icon: 'TrendingUp',
            color: 'success'
        },
        {
            id: 'revenue',
            title: 'Total Revenue',
            value: '$142K',
            change: '+$23K',
            changeType: 'increase',
            icon: 'DollarSign',
            color: 'warning'
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            primary: 'bg-[#DBEAFE] text-[#2563EB] border-[#3B82F6]',
            accent: 'bg-[#E0F2FE] text-[#0284C7] border-[#0EA5E9]',
            success: 'bg-[#D1FAE5] text-[#059669] border-[#10B981]',
            warning: 'bg-[#FEF3C7] text-[#D97706] border-[#F59E0B]'
        };
        return colorMap[color] || colorMap.primary;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics?.map((metric) => (
                <div
                    key={metric?.id}
                    className="bg-[#FFFFFF] p-6 rounded-lg shadow-md border-[#E2E8F0] border hover:shadow-lg transition-all duration-200"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-md ${getColorClasses(metric?.color)}`}>
                            <Icon name={metric?.icon} size={24} />
                        </div>
                        <div className={`text-sm font-medium px-2 py-1 rounded-md ${metric?.changeType === 'increase' ? 'bg-[#D1FAE5] text-[#059669]' : 'bg-[#FEE2E2] text-[#DC2626]'
                            }`}>
                            {metric?.change}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-[#1E293B] mb-1">
                            {metric?.value}
                        </h3>
                        <p className="text-[#64748B] text-sm">
                            {metric?.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PerformanceMetrics;