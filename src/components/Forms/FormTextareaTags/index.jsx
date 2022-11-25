import React, {useState} from "react";
import Icon from "../../Icon";


const FormTextareaTags = ({label}) =>{
    const [tags, setTags] = useState([])

    const removeTags = (indexRemove) =>{
        setTags(tags.filter((_, index) => index !==indexRemove))
    }

    const addTags = e =>{
        if (e.key=== "Enter" && e.target.value !=="") {
            setTags([...tags, e.target.value]);
            e.target.value='';
        }
    }

    return (
        <>
            {label && (
                    <label htmlFor={label} className="label-tag">{label}</label>
                )}
            <div className="form-tags">
                
                <ul className="form-tags-items">
                    {tags && (
                        tags.map((tag, index) => (
                            <li key={index} className="tag-item">{tag} <span className="form-tags-remove" onClick={() => removeTags(index)}><Icon name="close"/></span> </li>
                        ))
                    )}
                </ul>
                <input type="text" id={label} className="form-input-tag" placeholder="Press enter to add tags" onKeyUp={addTags} />
            </div>
        </>
        
    );
}

export default FormTextareaTags