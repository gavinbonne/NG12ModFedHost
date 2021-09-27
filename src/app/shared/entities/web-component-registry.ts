export const WebComponentRegistry = {
    REACT_MFE_INPUT_OUTPUT: () => import('reactMfeSandbox/reactMfeInputOutput'),
    REACT_MFE_TILE: () => import('reactMfeSandbox/reactMfeTile'),
    REACT_MFE_PARENT: () => import('reactMfeSandbox/reactMfeParent')
};

export enum RegistryItem {
    REACT_MFE_INPUT_OUTPUT = 'REACT_MFE_INPUT_OUTPUT',
    REACT_MFE_TILE = 'REACT_MFE_TILE',
    REACT_MFE_PARENT = 'REACT_MFE_PARENT'
}