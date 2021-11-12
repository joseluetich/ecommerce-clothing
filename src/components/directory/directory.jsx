import React from "react";
import './directory.scss';
import MenuItem from "../menu-item/menu-item";
import SECTIONS_DATA from "./sectionsData";

class Directory extends React.Component {
    constructor() {
      super();

      this.state = {
        sections: SECTIONS_DATA
      }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                  this.state.sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        );
    }
}

export default Directory;