"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Calendar, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/utils/projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { language } = useLanguage();

  // Find the project data based on the slug
  const project =
    projectsData[language].find((p) => p.slug === slug) ||
    projectsData[language][0];

  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Content sections animation
      gsap.from(".animate-section", {
        scrollTrigger: {
          trigger: ".animate-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section
          ref={headerRef}
          className="relative bg-gradient-to-r from-navy to-blue py-20 text-white"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <Button
              variant="ghost"
              className="text-white mb-8 hover:bg-white/10"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "es" ? "Volver" : "Back"}
            </Button>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-white/80 mb-6">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 text-white/80">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={project.featuredImage || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div ref={contentRef} className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <section className="animate-section mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                {language === "es" ? "Descripción General" : "Overview"}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{project.overview}</p>
              </div>
            </section>

            {/* Challenge */}
            <section className="animate-section mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                {language === "es" ? "El Desafío" : "The Challenge"}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{project.challenge}</p>
              </div>
            </section>

            {/* Solution */}
            <section className="animate-section mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                {language === "es" ? "Nuestra Solución" : "Our Solution"}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{project.solution}</p>
              </div>

              {/* Solution Image */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.solutionImage || "/placeholder.svg"}
                  alt="Solution visualization"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </section>

            {/* Technologies */}
            <section className="animate-section mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                {language === "es"
                  ? "Tecnologías Utilizadas"
                  : "Technologies Used"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-blue mb-2">
                      {tech.icon || <CheckCircle className="mx-auto h-6 w-6" />}
                    </div>
                    <div className="font-medium text-navy">{tech.name}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="animate-section mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                {language === "es" ? "Resultados" : "Results"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <div className="text-3xl font-bold text-blue mb-2">
                      {result.value}
                    </div>
                    <div className="text-gray-600">{result.label}</div>
                  </div>
                ))}
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{project.resultsDescription}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
