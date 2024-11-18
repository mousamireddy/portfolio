import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary/80">{skill.name}</span>
                <span className="text-sm text-primary/60">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden border border-white/30">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: delay + index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
