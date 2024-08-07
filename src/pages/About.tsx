// src/pages/About.tsx
import { motion } from 'framer-motion';
import BreadcrumbNav from '../components/Breadcrumb';


const About = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <BreadcrumbNav />
            <motion.h2
                className="text-4xl font-bold text-gray-800 mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About CollaboraLearn
            </motion.h2>
            <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                CollaboraLearn is a comprehensive study group platform designed to optimize collaborative learning experiences for students. Our mission is to create a conducive environment for students to share knowledge, resources, and support each other in their academic journey.
            </motion.p>
            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                <p className="mt-4 text-gray-600">
                    To be the leading platform for student collaboration and learning, fostering a global community of learners.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
