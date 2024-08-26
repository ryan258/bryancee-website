// src/components/ServiceCard.tsx

import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="service-card">
      {/* TODO: Implement service card layout */}
    </div>
  );
};

export default ServiceCard;