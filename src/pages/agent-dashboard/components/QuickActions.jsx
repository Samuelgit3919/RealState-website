// src/pages/agent-dashboard/components/QuickActions.jsx
import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickActions = ({ onQuickListing }) => {
    const actions = [
        {
            id: 'new-listing',
            title: 'Add Listing',
            description: 'Create a new property listing',
            icon: 'Plus',
            color: 'primary',
            onClick: onQuickListing
        },
        {
            id: 'schedule-showing',
            title: 'Schedule Showing',
            description: 'Book property viewing appointments',
            icon: 'Calendar',
            color: 'accent',
            onClick: () => console.log('Schedule showing')
        },
        {
            id: 'import-leads',
            title: 'Import Leads',
            description: 'Upload leads from CSV or CRM',
            icon: 'Upload',
            color: 'success',
            onClick: () => console.log('Import leads')
        },
        {
            id: 'generate-report',
            title: 'Generate Report',
            description: 'Create performance analytics',
            icon: 'FileText',
            color: 'warning',
            onClick: () => console.log('Generate report')
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            primary: 'bg-[#DBEAFE] text-[#2563EB] hover:bg-primary-200 border-[#3B82F6]',
            accent: 'bg-[#E0F2FE] text-[#0284C7] hover:bg-accent-200 border-[#0EA5E9]',
            success: 'bg-[#D1FAE5] text-[#059669] hover:bg-success-200 border-[#10B981]',
            warning: 'bg-[#FEF3C7] text-[#D97706] hover:bg-warning-200 border-[#F59E0B]'
        };
        return colorMap[color] || colorMap.primary;
    };

    return (
        <div className="bg-[#FFFFFF] rounded-lg shadow-md border border-[#E2E8F0]">
            <div className="p-6 border-b border-b-[#E2E8F0] border-border">
                <h3 className="text-lg font-semibold text-[#2563EB] font-heading">
                    Quick Actions
                </h3>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {actions?.map((action) => (
                        <button
                            key={action?.id}
                            onClick={action?.onClick}
                            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-lg micro-interaction text-left ${getColorClasses(action?.color)
                                }`}
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <Icon name={action?.icon} size={20} />
                                <span className="font-medium text-sm">
                                    {action?.title}
                                </span>
                            </div>
                            <p className="text-xs text-[#64748B]">
                                {action?.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickActions;