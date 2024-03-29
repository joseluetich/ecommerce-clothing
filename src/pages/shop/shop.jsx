import React from "react";
import COLLECTIONS_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/collection-preview"

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collections: COLLECTIONS_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) =>
            <CollectionPreview key={id} {...otherCollectionProps} />)
        }
      </div>
    );
  }
}

export default ShopPage;