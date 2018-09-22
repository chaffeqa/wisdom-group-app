const pathnameResponseTypeMatcher = /response\/([a-z]*)/
const pathnameCategoryMatcher = /category\/([a-z]*)/
const pathnameFeedMatcher = /feed/

export const getCurrentCategory = ({navigation}) => navigation.getParam('category') || null
export const getCurrentResponseType = ({navigation}) => navigation.getParam('response') || null
export const goTo = (pathname, props) => {
  const {navigation: {navigate}} = props
  const categoryMatch = pathnameCategoryMatcher.exec(pathname)
  const responseMatch = pathnameResponseTypeMatcher.exec(pathname)
  if (responseMatch && categoryMatch) {
    return navigate('CategoryResponse', {category: categoryMatch[1], response: responseMatch[1]})
  }
  if (categoryMatch) {
    return navigate('Category', {category: categoryMatch[1]})
  }
  if (pathnameFeedMatcher.test(pathname)) {
    return navigate('Feed')
  }
  return navigate('Wheel')
}
