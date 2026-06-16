/**
 * Purpose: Display the projects I've created in a table format
 * 
 * Author: Michael Lugo
 */

type Project = {
    projectName: string
    projectDescription: string
    projectLink: string
  }

export default function ProjectsTable(props: { projects: Project[] }) {
  
  return(
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {/* foreach for */}
          {props.projects.map((project, index) => (
            <tr key={project.projectName}>
              <th>{index + 1}</th>
              <td>{project.projectName}</td>
              <td>{project.projectDescription}</td>
              <td>
                <a
                  href={project.projectLink}
                  className="link link-primary"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}