"use client";

import { useState } from "react";
import { CasesMainContent } from "@/components/CasesMainContent";


export default function CasosDeExitoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  return (
    <main className="min-h-screen">
      <CasesMainContent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
      />
    </main>
  );
}
