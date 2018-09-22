const pathnameResponseTypeMatcher = /response\/([a-z]*)/
const pathnameCategoryMatcher = /category\/([a-z]*)/

export const getCurrentCategory = location => {
  const match = pathnameCategoryMatcher.exec(location.pathname)
  return match ? match[1] : null
}
export const getCurrentResponseType = location => {
  const match = pathnameResponseTypeMatcher.exec(location.pathname)
  return match ? match[1] : null
}
