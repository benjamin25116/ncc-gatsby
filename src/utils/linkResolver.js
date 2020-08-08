export const linkResolver = _meta => {
  // URL for a category type
  if (_meta.type === "post") {
    return `/messages/${_meta.uid}`
  }
  // Backup for all other types
  return "/"
}
