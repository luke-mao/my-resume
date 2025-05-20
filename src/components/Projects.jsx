import React from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectItems = ({ title, description, badges, repoLink, demoLink }) => (
  <Card className="mb-4 w-[450px]">
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
        {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <FaGithub className="h-4 w-4" />
            View Code
          </Button>
        </a>}
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
    title: "PyCodePractice - Leetcode-like Python Coding Platform",
    description: `A full-stack platform for solving Python coding challenges with safe, real-time code execution. 
    The backend dynamically spins up Docker containers to sandbox user-submitted code, ensuring secure, isolated execution with resource limits. 
    Additionally, an AI Tutor powered by OpenAI GPT-4o Mini provides optional step-by-step hints via prompt engineering, helping users debug and understand problems without revealing full answers. 
    Deployed on a Vultr VPS using Docker Compose and Nginx with a custom domain.`,
    badges: ["Docker", "Sandboxing", "Flask", "React", "GPT-4o-mini", "Deployment"],
    repoLink: null,
    demoLink: "http://pycodepractice.lukemao.site",
  },
  {
    title: "Data Compression Algorithms",
    description: `A pure C implementation of multiple compression algorithms, including Static Huffman, Dynamic Huffman (FGK and Vitter), and LZW. 
    The program supports file compression and decompression using custom-built data structures such as trees and linked lists. 
    This project showcases strong skills in low-level programming, algorithm design, and manual memory management.`,
    badges: ["C", "Huffman", "LZW", "File I/O", "Data Structures"],
    repoLink: "https://github.com/luke-mao/Data-Compression",
    demoLink: null,
  },
  {
    title: "WWCD5 Laptop Comparison Website",
    description: `A full-stack e-commerce platform developed for the COMP9900 capstone project at UNSW in 2021. 
    The site allows users to browse and compare laptops, with support for admin and customer roles. 
    Built with HTML, CSS, and JavaScript on the frontend, and Python Flask RESTX API with SQLite on the backend. 
    Features include product catalog, customer login, admin dashboard, and a chatbot for user interaction.`,
    badges: ["JavaScript", "HTML", "CSS", "Flask", "SQLite"],
    repoLink: "https://github.com/luke-mao/WWCD5_Laptop_Website",
    demoLink: null,
  },
  {
    title: "Slackr - Slack-Style Chat App (Frontend)",
    description: `A frontend messaging app built with HTML, CSS, and Vanilla JavaScript, styled with Bootstrap 5 for responsive layout. 
    Reimplements core features of Slack including channel creation, real-time messaging, emoji reactions, infinite scroll, and profile management. 
    Uses fragment-based URL routing and communicates with a provided backend API.`,
    badges: ["JavaScript", "HTML", "CSS", "Bootstrap", "Routing", "DOM"],
    repoLink: "https://github.com/luke-mao/slackr",
    demoLink: null,
  }
];

export default function Projects() {
  return (
    <section className="mt-5">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="flex flex-row flex-wrap gap-4">
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
