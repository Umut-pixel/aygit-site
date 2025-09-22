

export const DELETED_AYGIT_FILE_MESSAGE = ' AygitCallbackForm.tsx has been PERMANENTLY DELETED. Use ContactCallbackForm.tsx instead.';

export default function DeletedAygitCallbackForm() {
  throw new Error(DELETED_AYGIT_FILE_MESSAGE);
}

// Ensure any imports fail immediately
export function useAygitCallbackForm() {
  throw new Error(DELETED_AYGIT_FILE_MESSAGE);
}

export function AygitCallbackForm() {
  throw new Error(DELETED_AYGIT_FILE_MESSAGE);
}