import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            className="relative h-lvh bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('src/assets/bg1.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <motion.h2
                    className="text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to CollaboraLearn
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    A place where students collaborate and learn together.
                </motion.p>
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Button
                        variant="default"
                        className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold"
                    >
                        Get Started
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
