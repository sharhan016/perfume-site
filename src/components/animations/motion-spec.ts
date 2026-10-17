// Shared UI timing; cinematic hero choreography deliberately keeps its own pace.
export const motionSpec = {
 easeOut: [0.23, 1, 0.32, 1],
 easeMove: [0.77, 0, 0.175, 1],
 easeEditorial: [0.22, 1, 0.36, 1],
 easeDrawer: [0.32, 0.72, 0, 1],
 enter: 0.25,
 exit: 0.15,
 indicator: 0.2,
 reveal: 0.6,
 stagger: 0.06,
} as const;
