export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tools: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Zuellig Pharma Client Portal",
    company: "FPT Software",
    period: "May 2024 - Aug 2024",
    description: "Pharmaceutical distribution and order management system based on agent channels. Designed and executed comprehensive test cases based on SRS to validate pharmaceutical distribution workflows.",
    tools: ["Manual Testing", "SRS", "Test Case Design", "Jira"],
    highlights: [
      "Collaborated with BA/Dev to identify and resolve UI/UX issues, improving usability",
      "Reported and tracked defects using Jira, ensuring timely resolution and product quality",
      "Team size: 14"
    ]
  },
  {
    id: "2",
    title: "C-Ticket System",
    company: "CMC Global",
    period: "Nov 2024 - Jan 2025",
    description: "System for handling requests for changes, improvements, complaints, and internal incident reports. Automated test cases using Cypress and integrated with CI/CD pipeline.",
    tools: ["Cypress", "JavaScript", "CI/CD", "Regression Testing"],
    highlights: [
      "Automated test cases for internal ticketing system using Cypress",
      "Managed automation test suite and performed regression testing across multiple modules",
      "Integrated automation tests into CI/CD pipeline, reducing manual effort",
      "Team size: 6"
    ]
  },
  {
    id: "3",
    title: "HRMS - Human Resource Management System",
    company: "CMC Global",
    period: "Jan 2024 - Apr 2025",
    description: "Internal human resource management system of the company. Developed automation scripts with Selenium & Java for HR management system and integrated into CI/CD pipeline.",
    tools: ["Selenium", "Java", "CI/CD", "Automation Testing"],
    highlights: [
      "Developed automation scripts with Selenium & Java for HR management system",
      "Integrated automation tests into CI/CD pipeline, reducing manual effort",
      "Team size: 10"
    ]
  },
  {
    id: "4",
    title: "C-CodeX - AI Extension",
    company: "CMC Global",
    period: "Jan 2025 - May 2025",
    description: "AI Extension that supports programming on VScode. Created and maintained test case suite based on Figma design and SRS, conducted functional and UI testing.",
    tools: ["Manual Testing", "Figma", "SRS", "UI Testing", "VScode"],
    highlights: [
      "Created and maintained test case suite based on Figma design and SRS",
      "Conducted functional and UI testing for AI-powered VScode extension",
      "Reported defects and suggested improvements, enhancing product stability before release",
      "Team size: 14"
    ]
  }
];
