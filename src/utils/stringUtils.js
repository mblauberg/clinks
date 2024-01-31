
export function titleCase(str) {
    return str
      // Replace underscores with spaces
      .replace(/_/g, ' ')
      // Split the string into words
      .split(' ')
      // Capitalize the first letter of each word
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      // Join the words back into a string
      .join(' ');
  }
  