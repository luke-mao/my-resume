import React from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectItems = ({ title, description, badges, repoLink, demoLink }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <Badge key={index}>{badge}</Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <FaGithub className="h-4 w-4" />
            View Code
          </Button>
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="flex items-center gap-2">
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </a>
        )}
      </div>
    </CardContent>
  </Card>
)

const data = [
  {
    title: "Data Compression Algorithms",
    description: "A C program implementation of Static Huffman, Dynamic Huffman (both FGK and Vitter versions), and LZW algorithm. These algorithms are used to compress and decompress files, demonstrating the principles of data compression.",
    badges: ["C", "Huffman", "LZW", "File I/O"],
    repoLink: "https://github.com/luke-mao/Data-Compression",
    demoLink: null,
  },
];

export default function Projects() {
  return (
    <section className="mt-5">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="flex flex-col gap-4">
        {data.map((project, index) => (
          <ProjectItems
            key={index}
            title={project.title}
            description={project.description}
            badges={project.badges}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  )
}
