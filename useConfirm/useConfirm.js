export const useConfirm = (message = "", onComfirm, onCancel) => {
  if (!onComfirm || typeof onComfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onComfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
