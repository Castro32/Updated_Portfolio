// import React from 'react';
// import CardMe from '@/components/ui/cardme';
// import { Badge } from '@/components/ui/badge';

// const Projects = ({ items }) => (
//     <CardMe title="Featured Projects">
//         <div className="space-y-6">
//             {items?.map((project) => (
//                 <div key={project.id} className="border-b border-gray-700 pb-4 last:border-b-0">
//                     <h4 className="font-semibold text-[#c3b79d]">{project.name}</h4>
//                     <p className="text-sm text-gray-300 mt-1">{project.description}</p>
//                     <p className="text-sm text-gray-300 mt-1">{project.tags?.map(tag => tag).join(', ')}</p>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                         {project.tags?.map((tag) => (
//                             <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">{tag}</Badge>
//                         ))}
//                     </div>
//                     <div className="mt-3 flex gap-4 text-sm">
//                        <a href={project.website_link} target="_blank" rel="noopener noreferrer" className="text-[#c3b79d] hover:underline">Visit Website</a>
//                        {/* <a href={project.details_link} target="_blank" rel="noopener noreferrer" className="text-[#c3b79d] hover:underline">View Details</a> */}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </CardMe>
// );

// export default Projects;
import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react'; // Import ExternalLink icon

const Projects = ({ items }) => (
    <CardMe title="Featured Projects">
        <div className="space-y-6">
            {items?.map((project) => (
                <div key={project.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-[#c3b79d]">{project.name}</h4>
                    <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                    {/* The line below concatenates tags as a string, you might want to remove it if badges are sufficient */}
                    {/* <p className="text-sm text-gray-300 mt-1">{project.tags?.map(tag => tag).join(', ')}</p> */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">{tag}</Badge>
                        ))}
                    </div>
                    <div className="mt-3 flex gap-4 text-sm">
                       {/* --- MODIFIED LOGIC HERE --- */}
                       {project.website_link && project.name !== "National Cargo Tracking System" && (
                           <a
                               href={project.website_link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-[#c3b79d] hover:underline flex items-center gap-1"
                           >
                               Visit Website <ExternalLink size={14} className="ml-1" /> {/* Added icon for external link */}
                           </a>
                       )}
                       {/* --- END MODIFIED LOGIC --- */}
                       {/* <a href={project.details_link} target="_blank" rel="noopener noreferrer" className="text-[#c3b79d] hover:underline">View Details</a> */}
                    </div>
                </div>
            ))}
        </div>
    </CardMe>
);

export default Projects;