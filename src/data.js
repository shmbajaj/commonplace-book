const logoPath = `${process.env.PUBLIC_URL}/assets/logo/logo.svg`;
const publicURL = process.env.PUBLIC_URL;
const icons = [
  {
    iconText: "New Note",
    iconName: "add_cirle",
  },
  {
    iconText: "Notes",
    iconName: "article",
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
];

const actionIcons = [
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
];

export { publicURL, logoPath, icons, actionIcons };
