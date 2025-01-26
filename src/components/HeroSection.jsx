// "use client";
import * as motion from "motion/react-client";
// import { motion } from "motion/react";
import Image from "next/image";

const heroImages = [
  "/team-imags/abhidip-hazra.jpeg",
  "/team-imags/arindam-basu.jpeg",
  "/team-imags/anup-kumar-ghosh.jpeg",
  "/team-imags/avhijit-baruri.jpeg",
  "/team-imags/abhishek-sarkar.jpeg",
  "/team-imags/ranjit-jha.jpeg",
  "/team-imags/saikat-de-bhaumik.jpeg",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
];
const duplicatedImages = [...heroImages, ...heroImages, ...heroImages];

const HeroSection = () => {
  return (
    <div className="relative h-[500px] overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="flex gap-4 p-4"
          animate={{
            x: [10, -((480 + 16) * heroImages.length)],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <Image
              unoptimized // just for now
              key={index}
              src={image}
              alt={`Remote aid ${index + 1}`}
              width={480}
              height={480}
              className="h-[480px] w-[480px] rounded-lg object-cover"
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center bg-black/50">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            By Beside You Pase Achi
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            Standing beside those who need us the most, reaching remote
            communities worldwide
          </p>
          <button className="rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
            Join Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
