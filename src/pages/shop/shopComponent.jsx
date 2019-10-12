import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overviewComponents";
import CollectionsPage from "../collections/collectionsComponent";
import "./shopStyles.scss";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
  </div>
);

export default ShopPage;
