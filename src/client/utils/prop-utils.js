const pathnameResponseTypeMatcher = /response\/([a-z]*)/
const pathnameCategoryMatcher = /category\/([a-z]*)/
const pathnameFeedMatcher = /feed/

export const getCurrentCategory = (props) => {
  if (props.location) {
    const match = pathnameCategoryMatcher.exec(props.location.pathname)
    return match ? match[1] : null
  } else {
    return props.navigation.getParam('category') || null
  }
}
export const getCurrentResponseType = (props) => {
  if (props.location) {
    const match = pathnameResponseTypeMatcher.exec(props.location.pathname)
    return match ? match[1] : null
  } else {
    return props.navigation.getParam('response') || null
  }
}

export const goTo = (pathname, props) => {
  const categoryMatch = pathnameCategoryMatcher.exec(pathname)
  const responseMatch = pathnameResponseTypeMatcher.exec(pathname)
  if (props.history) {
    const {history: {push}} = props
    if (responseMatch && categoryMatch) {
      return push(`/category/${categoryMatch[1]}/response/${responseMatch[1]}`)
    }
    if (categoryMatch) {
      return push(`/category/${categoryMatch[1]}`)
    }
    if (pathnameFeedMatcher.test(pathname)) {
      return push('/feed')
    }
    return push('/')
  } else {
    const {navigation: {navigate}} = props
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
  
}
