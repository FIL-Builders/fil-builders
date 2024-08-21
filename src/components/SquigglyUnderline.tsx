import { motion } from "framer-motion";

export const SquigglyUnderline = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className="relative inline-block">
      {children}
      <motion.div className="absolute -bottom-[2px] left-0 right-0 h-[2px]">
        <svg width="100%" height="10" viewBox="0 0 300 10" fill="none">
          <motion.path
            d="M1 5C10 0 50 15 70 5C90 -5 110 10 130 5C150 0 180 15 200 5C220 -5 250 15 270 5C290 0 300 10 310 5" // Custom squiggle
            stroke="#FFE05F"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: 300, // Adjust strokeDasharray to match the longer path
              strokeDashoffset: 300,
            }}
            animate={{
              strokeDashoffset: 0,
            }}
            transition={{
              duration: 1,
            }}
          />
        </svg>
      </motion.div>
    </span>
  );
};
