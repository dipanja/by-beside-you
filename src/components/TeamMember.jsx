import Image from "next/image";
const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-xl bg-gradient-to-l from-transparent to-white/10">
      <Image
        // src={`${member.image}?auto=format&fit=crop&w=200&h=200&q=80`}
        src={member.image}
        width={600}
        height={600}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
      <p className="text-blue-600 text-center">{member.role}</p>
      <p className="text-slate-600 text-center">{member.bio}</p>
      <p className="text-blue-600 mb-2">{member.phone}</p>
    </div>
  );
};

export default TeamMember;
