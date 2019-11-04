import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../withSpinner/withSpinnerComponent";
import { selectCollectionIsFetching } from "../../redux/shop/shopSelector";
import ColloctionsOverview from "../collections-overview/collections-overviewComponents";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ColloctionsOverview);

export default CollectionsOverviewContainer;
