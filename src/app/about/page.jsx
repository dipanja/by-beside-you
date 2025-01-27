import { teamMembers } from "../data/team-member";
import TeamMember from "@/components/TeamMember";

const AboutPage = async () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-gradient-to-r from-transparent to-gray-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-black font-geistsans">
          Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black  font-geistsans">
            Our Vision
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            We envision a world where geographical isolation doesn't limit
            access to basic necessities, healthcare, and education. Through
            dedication and partnership, we're making this vision a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
