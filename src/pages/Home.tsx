import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import AnimatedGradient from '../components/ui/AnimatedGradient';

// Font categories remain the same
type FontCategory = 'display' | 'modernSans' | 'experimental';

const fontCategories: Record<FontCategory, string[]> = {
  display: [
    'font-bebas-neue',
    'font-elianto',
    'font-wire-one',
    'font-dyeline',
    'font-paytone-one'
  ],
  modernSans: [
    'font-foobar-pro',
    'font-ikaros',
    'font-mosk',
    'font-coco',
    'font-linotte'
  ],
  experimental: [
    'font-audrey',
    'font-zefani',
    'font-penna',
    'font-bitner',
    'font-glober'
  ]
} as const;

const pastelColors = [
  'rgb(255, 87, 123)',
  'rgb(255, 126, 48)',
  'rgb(255, 190, 11)',
  'rgb(46, 196, 182)',
  'rgb(0, 180, 216)',
  'rgb(144, 99, 255)',
  'rgb(255, 89, 94)',
  'rgb(67, 206, 162)',
  'rgb(255, 123, 196)',
  'rgb(83, 144, 217)',
  'rgb(159, 89, 255)',
  'rgb(24, 191, 255)'
];

export default function Home() {
  const { isAuthenticated } = useAuth();
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [currentFont, setCurrentFont] = useState(fontCategories.display[0]);
  const [currentColor, setCurrentColor] = useState(pastelColors[0]);
  const [lastCategory, setLastCategory] = useState<FontCategory | ''>('');

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomFont = () => {
    const availableCategories = (Object.keys(fontCategories) as FontCategory[]).filter(cat => cat !== lastCategory);
    const randomCategory = availableCategories[Math.floor(Math.random() * availableCategories.length)];
    const categoryFonts = fontCategories[randomCategory];
    const randomFont = categoryFonts[Math.floor(Math.random() * categoryFonts.length)];
    setLastCategory(randomCategory);
    return randomFont;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFont = getRandomFont();
      const randomColorIndex = Math.floor(Math.random() * pastelColors.length);
      setCurrentFont(randomFont);
      setCurrentColor(pastelColors[randomColorIndex]);
    }, 150);
    return () => clearInterval(interval);
  }, [lastCategory]);

  const firstCardY = useTransform(scrollY, [windowHeight * 0.5, windowHeight * 1.5], [100, 0]);
  const secondCardY = useTransform(scrollY, [windowHeight * 1.2, windowHeight * 2.2], [100, 0]);
  const thirdCardY = useTransform(scrollY, [windowHeight * 1.9, windowHeight * 2.9], [100, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Disclaimer Banner */}
      <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-sm text-gray-600 text-center">
            Note: Current content and features are placeholder data for demonstration purposes
          </p>
        </div>
      </div>

      {/* Hero Sections */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* SEED THE FUTURE Section - Fixed size container */}
        <section className="relative lg:w-1/2 h-screen lg:h-auto flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <AnimatedGradient
              colors={[
                'rgb(255, 71, 87)',
                'rgb(46, 213, 115)',
                'rgb(54, 174, 255)',
                'rgb(255, 199, 0)'
              ]}
              speed={8}
              blur="medium"
            />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)'
              }}
            />
          </div>
          <div className="relative z-10 w-full px-4">
            <motion.h1
              key={`${currentFont}-${currentColor}`}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${currentFont} text-center`}
              style={{
                color: currentColor,
                transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              SEED THE FUTURE
            </motion.h1>
          </div>
        </section>

        {/* Rest of the sections remain the same */}
        <section className="lg:w-1/2 min-h-screen lg:min-h-0 flex items-center justify-center p-8">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                Empower the Next Generation of Innovation
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Join a community of forward-thinking investors who decide which startups shape tomorrow.
                Be part of the next big success story from its earliest stages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {isAuthenticated ? (
                <Link to="/invest" className="w-full">
                  <Button className="w-full bg-black hover:bg-gray-900 text-white group px-8 py-4 rounded-full text-lg">
                    Explore Startups
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <Button className="w-full bg-black hover:bg-gray-900 text-white group px-8 py-4 rounded-full text-lg">
                      Start Investing
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <Button variant="outline" className="w-full border-2 border-black text-black hover:bg-gray-50 px-8 py-4 rounded-full text-lg">
                      Create Account
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ y: firstCardY }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-purple-200 rounded-[2rem] p-12 aspect-square flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl font-bold text-purple-500/30">INNOVATE</h1>
                </div>
                <div className="w-full h-full bg-[url('/placeholder-chart.png')] bg-cover bg-center rounded-xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="text-sm font-medium text-purple-600 mb-4 uppercase tracking-wide">PUBLIC CHOICE</div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  You Decide Which Companies Grow
                </h2>
                <p className="text-xl text-gray-600">
                  For the first time, the public has the power to choose which innovative startups receive funding.
                  Your investment decisions shape the future of technology and business.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Second Feature */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ y: secondCardY }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-8">
                <div className="text-sm font-medium text-rose-600 mb-4 uppercase tracking-wide">EARLY OPPORTUNITY</div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Own Shares in Tomorrow's Giants
                </h2>
                <p className="text-xl text-gray-600">
                  Get early access to promising startups before they become household names.
                  Invest in the next generation of great companies at their earliest stages.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-rose-200 rounded-[2rem] p-12 aspect-square flex items-center justify-center order-1 lg:order-2"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl font-bold text-rose-500/30">INVEST</h1>
                </div>
                <div className="w-full h-full bg-[url('/placeholder-stats.png')] bg-cover bg-center rounded-xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Third Feature */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ y: thirdCardY }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-mint-200 rounded-[2rem] p-12 aspect-square flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl font-bold text-emerald-500/30">GROW</h1>
                </div>
                <div className="w-full h-full bg-[url('/placeholder-funding.png')] bg-cover bg-center rounded-xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="text-sm font-medium text-emerald-600 mb-4 uppercase tracking-wide">STARTUP FUNDING</div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Easiest Way to Raise Funding
                </h2>
                <p className="text-xl text-gray-600">
                  For startups, we provide a direct line to thousands of potential investors.
                  Streamline your fundraising process and focus on building your vision.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}