import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillsGroup1 = [
  { name: 'Java', progress: 90 },
  { name: 'Python', progress: 85 },
  { name: 'HTML', progress: 95 },
  { name: 'CSS', progress: 95 },
  { name: 'JavaScript', progress: 90 },
  { name: 'React', progress: 90 },
  { name: 'Figma', progress: 80 },
];

const skillsGroup2 = [
  { name: 'MongoDB', progress: 85 },
  { name: 'SQL', progress: 80 },
  { name: 'Unity', progress: 75 },
  { name: 'VR', progress: 70 },
  { name: 'Blender', progress: 75 },
  { name: 'Microsoft Office', progress: 90 },
  { name: 'Adobe Creative Suite', progress: 80 },
];

const technologiesByCategory = {
  'Game Development': ['Unity', 'VR', 'Blender'],
  'Web Development': [
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
  ],
  'Office and Productivity': [
    'Microsoft Office',
    'Adobe Creative Suite',
    'Google Workspace',
  ],
  'Operating Systems': ['Windows', 'Linux'],
};

export function Skills() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Skills & Expertise
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Skills - Group 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Core Skills (Group 1)</h2>
                <div className="space-y-6">
                  {skillsGroup1.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.progress}%
                        </span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Skills - Group 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Core Skills (Group 2)</h2>
                <div className="space-y-6">
                  {skillsGroup2.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.progress}%
                        </span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Technologies</h2>
                <div className="space-y-4">
                  {Object.entries(technologiesByCategory).map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium mb-2">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                <ul className="space-y-3">
                  <li className="text-sm text-muted-foreground">
                    Unity Certified User: Programmer | Unity | ID: QHQk-4TVh | Issued: May 12, 2023
                  </li>
                  <li className="text-sm text-muted-foreground">
                    HTML & CSS | bitLabs | ID: k7EydYDzzI
                  </li>
                  <li className="text-sm text-muted-foreground">
                    Data Science for Beginners | FutureSkills Prime | ID: FSP/2023/2/1105386 | Issued: February 20, 2023
                  </li>
                  <li className="text-sm text-muted-foreground">
                    SQL | HackerRank | ID: 03D8960AC1B8 | Issued: November 24, 2021
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
