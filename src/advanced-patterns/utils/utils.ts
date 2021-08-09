export const getDisplayName = (hoc: any, component: any) =>
  `${hoc}(${component.displayName || component.name || "component"})`;

export const parseJSON = (res: any) => res.json();
