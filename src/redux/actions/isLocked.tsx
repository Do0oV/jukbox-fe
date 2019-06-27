export const isLocked = (bool:boolean) => ({
  type: 'SET_FLAG',
  data: bool
});