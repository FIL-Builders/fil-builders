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
        <svg width="100%" height="10" viewBox="0 0 800 10" fill="none">
          <motion.path
            d="M1 5C10 0 50 15 70 5C90 -5 110 10 130 5C150 0 180 15 200 5C220 -5 250 15 270 5C290 0 300 10 310 5C330 0 350 15 370 5C390 -5 410 10 430 5C450 0 480 15 500 5C520 -5 550 15 570 5C590 0 600 10 620 5C640 0 660 15 680 5C700 -5 720 10 740 5C760 0 780 15 800 5" // Extended custom squiggle
            stroke="#FFE05F"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: 800,
              strokeDashoffset: 800,
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
