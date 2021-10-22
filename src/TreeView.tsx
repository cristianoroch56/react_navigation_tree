import React, { useState } from 'react';
import reportIcon  from './reportIcon.png';

interface ITreeViewProps {
    index: number,
    name: string,
    data: any
}

const TreeView: React.FC<ITreeViewProps> = ({ index, name, data }) => {

    const [isToggle, setIsToggled] = useState<boolean>(false);

    const toggleReport = (): void => {
        setIsToggled(!isToggle)
    }

    return (
        <>
            <ul className={index == 0 ? 'tree' : ''}>
                <li className={index == 0 ? 'tree_li' : ''}>
                    {data && <input type="checkbox" checked={isToggle} onChange={toggleReport} id={name} />}
                    <label className={data ? "tree_label" : "child_label tree_label"} htmlFor={name}><span className={data ? "label_dropdwn" : ""}> {index === 0 && <img className="report-icon" src={reportIcon} alt="root"/>}  {name}</span></label>
                    {isToggle && (
                        data && data.map((node:any, key:number) => (
                            <TreeView key={`node_${key}`} index={key + 1} name={node.name} data={node?.data} />
                        ))
                    )}
                </li>
            </ul>

        </>
    )
}

export default TreeView;


