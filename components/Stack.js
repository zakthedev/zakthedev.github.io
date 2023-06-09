import { stack } from "@/data/config";

export default function Stack() {
  const { skills, title, desc } = stack;

  const SkillBadge = ({ skill }) => {
    return <span className="text-xl mx-4">{skill}</span>;
  };
  return (
    <div id="skills">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {title}
        </h2>
      </div>
      <div className="w-full">
        <h1>{desc}</h1>
      </div>
      <div className="">
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            {skills.map((skill, index) => {
              return (
                <span key={`skill-${index}`}>
                  <SkillBadge skill={skill} />
                </span>
              );
            })}
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            {skills.map((skill, index) => {
              return (
                <span key={`skill-${index}`}>
                  <SkillBadge skill={skill} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
