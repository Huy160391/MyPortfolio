export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "Selenium", category: "Automation" },
  { name: "Cypress", category: "Automation" },
  { name: "Playwright", category: "Automation" },
  { name: "Appium", category: "Automation" },
  { name: "Cucumber", category: "Automation" },
  { name: "Postman", category: "API Testing" },
  { name: "JMeter", category: "Performance" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Java", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "Git", category: "Version Control" },
  { name: "TestRail", category: "Test Management" },
  { name: "Jira", category: "Project Management" },
  { name: "SQL", category: "Database" },
  { name: "Serenity BDD", category: "Automation" },
];
