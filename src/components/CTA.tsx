/* eslint-disable react-refresh/only-export-components */
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
const CTA = () => {
    return (
        <section className="bg-blue-500 text-white py-20 ">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Join CollaboraLearn Today</h2>
                    <p className="text-lg md:text-2xl mb-8">Start optimizing your collaborative learning experience now.</p>

                </motion.h2>
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Button variant="default" className="bg-white text-blue-500 py-2 px-4 rounded-full">
                        Sign Up Now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;