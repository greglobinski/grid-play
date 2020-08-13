const showHelper = true

export const positionerCss = theme => {
  return {
    border: showHelper && `5px solid red`,
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: `70rem`,
    paddingLeft: theme.space[8],
    paddingRight: theme.space[8],
    position: `relative`,
    width: `100%`,
  }
}

export const stackCss = ({ theme, gap = 10 }) => ({
  border: showHelper && `5px solid blue`,
  display: `grid`,
  gap: theme.space[gap],
})

export const wrapperCss = ({ theme, asBox = false }) => ({
  border: showHelper && `5px solid orange`,
  background: theme.colors.grey,
  paddingTop: theme.space[8],
  paddingBottom: theme.space[8],
})

export const spacerCss = ({ theme, size = 0 }) => {
  return {
    height: theme.space[size],
  }
}
