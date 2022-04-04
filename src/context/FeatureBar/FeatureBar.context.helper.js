import { v4 as uuid } from "uuid";

const defaultFeaturesState = [
  {
    _id: uuid(),
    featureIconText: "Notes",
    featureIconName: "article",
    featureName: "notes",
    isActive: false,
  },
  {
    _id: uuid(),
    featureIconText: "Archive",
    featureIconName: "archive",
    featureName: "archives",
    isActive: false,
  },
  {
    _id: uuid(),
    featureIconText: "Trash",
    featureIconName: "delete",
    featureName: "deleted",
    isActive: false,
  },
];

function whichFeatureIsActive(features) {
  const numberOfFeatures = features.length;
  for (let xi = 0; xi < numberOfFeatures; ++xi) {
    if (features[xi].isActive) {
      return features[xi].featureName;
    }
  }
}

function featuresUpdated(prevFeatures, _id) {
  return prevFeatures.map((feature) => {
    const featureCopy = { ...feature };

    if (featureCopy._id === _id) {
      featureCopy.isActive = true;
    } else {
      featureCopy.isActive = false;
    }

    return featureCopy;
  });
}

export { defaultFeaturesState, whichFeatureIsActive, featuresUpdated };
