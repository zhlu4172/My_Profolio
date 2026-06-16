import { motion } from "framer-motion";

export default function SkillDetailCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="skill-card"
    >
      <h3>{skill.label}</h3>
      <p>{skill.description}</p>
    </motion.div>
  );
}
