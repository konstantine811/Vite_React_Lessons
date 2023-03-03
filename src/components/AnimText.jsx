import { motion } from "framer-motion";

const AnimText = (props) => {
  const sentence = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      animate="visible"
      transition={{ duration: 1 }}
      variants={sentence}
      initial="hidden"
      className={`${props.className}`}
      aria-label={props.copy}
      role={props.role}
    >
      {props.copy}
    </motion.div>
  );
};

export default AnimText;
