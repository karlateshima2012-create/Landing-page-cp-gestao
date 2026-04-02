import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Robot, { RobotExpression } from "./Robot";

export default function Chatbot() {
  const [expression, setExpression] = useState<RobotExpression>("happy");
  const [showBubble, setShowBubble] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFloating, setIsFloating] = useState(true);

  // Ciclo de expressões e balão
  useEffect(() => {
    const interval = setInterval(() => {
      const expressions: RobotExpression[] = ["happy", "cheerful", "curious", "thinking", "surprised", "love", "sparkle", "confused", "angry"];
      const randomExpr = expressions[Math.floor(Math.random() * expressions.length)];
      setExpression(randomExpr);
      
      // Chance de mostrar o balão
      if (Math.random() > 0.6) {
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Movimentação aleatória sutil para chamar atenção
  useEffect(() => {
    if (!isFloating) return;
    
    const moveInterval = setInterval(() => {
      setPosition({
        x: Math.random() * 30 - 15,
        y: Math.random() * 30 - 15
      });
    }, 3000);

    return () => clearInterval(moveInterval);
  }, [isFloating]);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="bg-gray-900 text-cyan-400 px-6 py-3 rounded-2xl rounded-br-none shadow-2xl border border-gray-800 mb-4 font-black text-sm tracking-widest relative pointer-events-auto uppercase"
          >
            POSSO TE AJUDAR?
            <div className="absolute -bottom-2 right-0 w-4 h-4 bg-gray-900 border-r border-b border-gray-800 rotate-45 transform translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          x: position.x, 
          y: position.y,
          scale: showBubble ? 1.1 : 1
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className="w-32 h-32 cursor-pointer pointer-events-auto group"
        onClick={() => {
          setExpression("sparkle");
          setShowBubble(true);
          setTimeout(() => setExpression("cheerful"), 1500);
        }}
        onMouseEnter={() => setExpression("curious")}
        onMouseLeave={() => setExpression("happy")}
      >
        <Robot expression={expression} className="w-full h-full" />
      </motion.div>
    </div>
  );
}
