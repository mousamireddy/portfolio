import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <div className="min-h-screen py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a motivated Full Stack Developer with a strong passion for
              creating interactive and efficient web solutions. My journey in
              tech has been driven by curiosity and hands-on experience across
              diverse projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in building user-friendly applications using
              technologies like React, JavaScript, and Node.js. With a keen
              interest in learning, I continuously explore new tools to enhance
              my skills and deliver innovative solutions.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">
                      Bachelor's in Information Technology
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Aditya College of Engineering and Technology, 2020-2024
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">Intermediate in MPC</div>
                    <div className="text-sm text-muted-foreground">
                      Aditya Junior College, 2018-2020
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">Game Development</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
                  <Badge variant="secondary">Signing</Badge>
                  <Badge variant="secondary">Cricket</Badge>
                  <Badge variant="secondary">Cooking</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
