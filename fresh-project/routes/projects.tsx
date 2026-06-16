/**
 * Purpose: A page for us to display the different types of apps or projects
 *  we have created
 * 
 * Author: Michael Lugo
 */
import ProjectsTable from '@/components/ProjectsTable.tsx';

const projects = [
  {
    projectName: 'Fresh-Project',
    projectDescription: 'The current project you\'re using.',
    projectLink: './'
  },
  {
    projectName: 'Angular-Project',
    projectDescription: 'Another portfolio but using Angular!',
    projectLink: './'
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsTable projects={projects} />
    </div>
  );
}
