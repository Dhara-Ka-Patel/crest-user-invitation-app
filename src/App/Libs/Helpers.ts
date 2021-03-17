export function uniqueIDGenerator() {
    const uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    return uniqueId;
  }

  