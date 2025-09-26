// src/pages/agent-dashboard/components/LeadManagement.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LeadManagement = () => {
    const [draggedLead, setDraggedLead] = useState(null);

    const columns = [
        {
            id: 'new',
            title: 'New',
            color: '[#64748B]',
            leads: [
                { id: 1, name: 'John Smith', property: '123 Oak Street', score: 85 },
                { id: 2, name: 'Sarah Johnson', property: '456 Pine Avenue', score: 92 }
            ]
        },
        {
            id: 'contacted',
            title: 'Contacted',
            color: '[#DBEAFE]',
            leads: [
                { id: 3, name: 'Mike Davis', property: '789 Maple Drive', score: 78 },
                { id: 4, name: 'Lisa Chen', property: '321 Elm Court', score: 88 }
            ]
        },
        {
            id: 'showing',
            title: 'Showing Scheduled',
            color: '[#D97706]',
            leads: [
                { id: 5, name: 'Robert Brown', property: '555 Cedar Lane', score: 95 }
            ]
        },
        {
            id: 'offer',
            title: 'Offer Pending',
            color: '[#059669]',
            leads: [
                { id: 6, name: 'Emily Wilson', property: '777 Birch Road', score: 98 }
            ]
        }
    ];

    const handleDragStart = (e, lead, sourceColumn) => {
        setDraggedLead({ lead, sourceColumn });
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, targetColumn) => {
        e.preventDefault();
        if (draggedLead && draggedLead?.sourceColumn !== targetColumn) {
            console.log(`Moving lead ${draggedLead?.lead?.name} from ${draggedLead?.sourceColumn} to ${targetColumn}`);
            // Implement lead status update logic
        }
        setDraggedLead(null);
    };

    const getColumnColor = (id) => {
        const colorMap = {
            new: "border-[#CBD5E1] bg-[#F1F5F9]",       // secondary
            contacted: "border-[#3B82F6] bg-[#DBEAFE]", // primary
            showing: "border-[#F59E0B] bg-[#FEF3C7]",   // warning
            offer: "border-[#10B981] bg-[#D1FAE5]",
        };
        return colorMap[id] || "border-[#CBD5E1] bg-[#F1F5F9]";
    };



    const getScoreColor = (score) => {
        if (score >= 90) return 'bg-[#D1FAE5] text-[#059669]';
        if (score >= 75) return 'bg-[#FEF3C7] text-[#D97706]';
        return 'bg-[#F1F5F9] text-[#475569]';
    };

    return (
        <div className="bg-[#FFFFFF] rounded-lg shadow-md border border-[#E2E8F0]">
            <div className="p-6 border-b border-[#E2E8F0]">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-primary font-heading">
                        Lead Pipeline
                    </h3>
                    <button className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200">
                        Manage All
                    </button>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {columns?.map((column, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border-2 ${index % 2 === 0 ? 'border-dashed' : 'border-none'} p-4 min-h-[200px] transition-colors  duration-200 ${getColumnColor(column?.id)
                                }`}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, column?.id)}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium text-text-primary">
                                    {column?.title}
                                </h4>
                                <span className="text-xs bg-[#FFFFFF] px-2 py-1 rounded-md text-text-secondary">
                                    {column?.leads?.length}
                                </span>
                            </div>

                            <div className="space-y-2">
                                {column?.leads?.map((lead) => (
                                    <div
                                        key={lead?.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, lead, column?.id)}
                                        className="bg-[#FFFFFF] p-3 rounded-md shadow-md cursor-move hover:shadow-lg transition-all duration-200 border border-[#E2E8F0]"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h5 className="font-medium text-text-primary text-sm">
                                                {lead?.name}
                                            </h5>
                                            <span className={`text-xs px-2 py-1 rounded-md font-medium ${getScoreColor(lead?.score)
                                                }`}>
                                                {lead?.score}
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-secondary">
                                            {lead?.property}
                                        </p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <button className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                                                <Icon name="Phone" size={12} />
                                            </button>
                                            <button className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                                                <Icon name="Mail" size={12} />
                                            </button>
                                            <button className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                                                <Icon name="MessageSquare" size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {column?.leads?.length === 0 && (
                                <div className="text-center py-8">
                                    <Icon name="Users" size={32} className="mx-auto text-secondary-300 mb-2" />
                                    <p className="text-text-secondary text-sm">No leads</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadManagement;