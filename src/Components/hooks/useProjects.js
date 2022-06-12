import { useEffect, useState } from "react"

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [lodaing, setLoading] = useState(true);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            }
            )
    }, []);
    return [projects, setProjects, lodaing];
}

export default useProjects;