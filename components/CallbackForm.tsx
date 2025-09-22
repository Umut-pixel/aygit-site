
export const DELETED_FILE_MESSAGE = 'CallbackForm.tsx has been PERMANENTLY DELETED. Use CallbackFormNuclear.tsx instead.';

export default function DeletedCallbackForm() {
  throw new Error(DELETED_FILE_MESSAGE);
}

// Ensure any imports fail immediately
export function useCallbackForm() {
  throw new Error(DELETED_FILE_MESSAGE);
}

export function CallbackForm() {
  throw new Error(DELETED_FILE_MESSAGE);
}