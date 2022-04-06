const logoPath = `${process.env.PUBLIC_URL}/assets/logo/logo.svg`;
const publicURL = process.env.PUBLIC_URL;
const features = [
  {
    iconText: "Notes",
    iconName: "article",
    featureName: "notes",
    isActive: false,
  },
  {
    iconText: "Labels",
    iconName: "label",
    featureName: "labels",
    isActive: false,
  },
  {
    iconText: "Archive",
    iconName: "archive",
    featureName: "archived",
    isActive: false,
  },
  {
    iconText: "Trash",
    iconName: "delete",
    featureName: "deleted",
    isActive: false,
  },
];

const featureNotes = {
  notes: false,
  labels: false,
  archived: false,
  deleted: false,
};

const actionIcons = {
  notes: [
    {
      iconText: "Priority High",
      iconName: "priority_high",
    },
    {
      iconText: "Background Color",
      iconName: "palette",
    },
    {
      iconText: "Labels",
      iconName: "label",
    },
    {
      iconText: "Archive",
      iconName: "archive",
    },
    {
      iconText: "Trash",
      iconName: "delete",
    },
    {
      iconText: "Save Note",
      iconName: "save",
    },
  ],
  archives: [
    {
      iconText: "Archive",
      iconName: "archive",
    },
    {
      iconText: "Trash",
      iconName: "delete",
    },
  ],
  deleted: [
    {
      iconText: "Trash",
      iconName: "delete",
    },
  ],
};

const appName = "Commonplace Book";

export { publicURL, logoPath, features, actionIcons, appName, featureNotes };
