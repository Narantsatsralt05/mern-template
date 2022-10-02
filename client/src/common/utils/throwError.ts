export const getErrorMessage = (
  error: unknown,
  where?: string | undefined
): string => {
  let message = `Something went wrong at ${where}!`;
  if (error instanceof Error) {
    message = error.message;
  }
  return message;
};
