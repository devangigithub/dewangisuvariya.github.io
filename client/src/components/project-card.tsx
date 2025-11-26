import { ExternalLink, Github, Star, Lock } from "lucide-react";
import { BrutalistButton } from "@/components/ui/brutalist-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    stars: number;
    link: string;
    isPrivate?: boolean;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col border-2 border-black bg-card text-card-foreground shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-200 h-full">
      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold uppercase tracking-tight font-sans">{project.title}</h3>
          <div className="flex items-center gap-1 font-mono text-sm border-2 border-black px-2 py-0.5 bg-secondary">
            <Star className="w-3 h-3 fill-black" />
            <span>{project.stars}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground font-mono text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 text-xs font-bold border border-black bg-white uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t-2 border-black bg-muted/20">
        {project.isPrivate ? (
          <BrutalistButton variant="outline" className="w-full gap-2 opacity-70 cursor-not-allowed">
            <Lock className="w-4 h-4" />
            Private Project
          </BrutalistButton>
        ) : (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full block">
            <BrutalistButton variant="brutal" className="w-full gap-2">
              <Github className="w-4 h-4" />
              View Code
            </BrutalistButton>
          </a>
        )}
      </div>
    </div>
  );
}
