import React from 'react';
import Banner from '../components/Banner';
import FeatureShowcase from './FeatureShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import FunFacts from './FunFacts';
import TeamCollaborationShowcase from './TeamCollaborationShowcase';
import TaskProgressTracker from './TaskProgressTracker';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeatureShowcase />
            <FunFacts />
            <TaskProgressTracker />
            <TeamCollaborationShowcase />
            <TestimonialCarousel />
        </div>
    );
};

export default Home;