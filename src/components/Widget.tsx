import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for props
interface WidgetProps {
  title: string;
  content: React.ReactNode; // Use React.ReactNode for flexible content types
}

const widgetVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Widget: React.FC<WidgetProps> = ({ title, content }) => (
  <motion.div
    variants={widgetVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
    className=" p-6 rounded-lg shadow-md"
  >    <div className=" p-4 rounded-lg shadow-md" role="region" aria-labelledby={title}>
        <h3 id={title} className="text-lg font-semibold mb-4">{title}</h3>
        <div>{content}</div>
      </div>
  </motion.div>
);

export default Widget;
