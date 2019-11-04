import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsLoading } from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/withSpinner/withSpinnerComponent";
import CollectionPage from "./collectionsComponent";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoading(state)
});
const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
