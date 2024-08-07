import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "../components/ui/card";
import { motion } from 'framer-motion';

const features = [
    {
        title: "Real-Time Communication",
        description: "Stay connected with your study group through instant messaging and video calls.",
        icon: "💬",
    },
    {
        title: "Resource Sharing",
        description: "Easily share and access study materials and resources within your group.",
        icon: "📚",
    },
    {
        title: "Task Management",
        description: "Organize and track tasks and deadlines to stay on top of your studies.",
        icon: "✅",
    },
];

const Features = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Features</h2>

                </motion.div>
                <Card className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <CardContent key={index} className="p-6 text-left">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <CardDescription>{feature.description}</CardDescription>
                            </motion.div>
                        </CardContent>
                    ))}
                </Card>
            </div>
        </section>
    );
};

export default Features;
