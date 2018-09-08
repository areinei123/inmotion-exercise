export function navigateToPage(page) {
  return {
    type: 'NAVIGATE_TO_PAGE',
    page: page,
  }
}

export function navigateBack(){
  return {
    type: 'NAVIGATE_BACK'
  }
}
