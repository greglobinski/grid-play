import React from "react"
import { Layout } from "../components/Layout"
import {
  stackCss,
  positionerCss,
  wrapperCss,
  spacerCss,
} from "../components/shared/styles/content"
import { ContentPlaceholder } from "../components/shared/components"

// presentational styles, not important

const exampleCss = theme => ({
  display: `grid`,
  gap: theme.space[12],
  // padding: `0 0 10rem`,
  border: `20px solid #333`,
  paddingBottom: theme.space[12],
})

const headingCss = theme => ({
  background: `#333`,
  color: `white`,
  fontWeight: 500,
  fontFamily: `sans-serif`,
  textAlign: `center`,
  fontSize: `1rem`,
  padding: `${theme.space[5]}`,
})

// end of presentational styles

const IndexPage = () => (
  <Layout>
    <div css={exampleCss}>
      <h2 css={headingCss}>Stack & Individually positioned sections</h2>
      {/* real stuff */}
      <div css={theme => stackCss({ theme })}>
        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={2} numberOfBodyLines={6} />
        </div>
        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={8} />
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Full width background section</h2>
      {/* real stuff */}
      <div css={theme => stackCss({ theme })}>
        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={6} />
        </div>
        <div css={theme => wrapperCss({ theme })}>
          <div css={positionerCss}>
            <ContentPlaceholder
              numberOfHeadingLines={3}
              numberOfBodyLines={5}
              isInverted={true}
            />
          </div>
        </div>
        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={6} />
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Working with Stack gap</h2>
      {/* real stuff */}
      <div css={theme => stackCss({ theme, gap: 10 })}>
        <div css={theme => wrapperCss({ theme })}>
          <div css={positionerCss}>
            <ContentPlaceholder
              numberOfHeadingLines={1}
              numberOfBodyLines={5}
              isInverted={true}
            />
          </div>
        </div>
        <div css={theme => wrapperCss({ theme })}>
          <div css={positionerCss}>
            <ContentPlaceholder
              numberOfHeadingLines={1}
              numberOfBodyLines={5}
              isInverted={true}
            />
          </div>
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Expand Stack gap with Spacer (1)</h2>
      {/* real stuff */}
      <div css={theme => stackCss({ theme, gap: 0 })}>
        <div css={theme => wrapperCss({ theme })}>
          <div css={positionerCss}>
            <ContentPlaceholder
              isInverted={true}
              numberOfHeadingLines={1}
              numberOfBodyLines={3}
            />
          </div>
        </div>

        <div css={theme => wrapperCss({ theme })}>
          <div css={positionerCss}>
            <ContentPlaceholder
              isInverted={true}
              numberOfHeadingLines={1}
              numberOfBodyLines={3}
            />
          </div>
        </div>

        <div css={theme => spacerCss({ theme, size: 10 })} />

        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={3} />
        </div>

        <div css={theme => spacerCss({ theme, size: 10 })} />

        <div css={theme => wrapperCss({ theme })}>
          <div css={positionerCss}>
            <ContentPlaceholder
              isInverted={true}
              numberOfHeadingLines={1}
              numberOfBodyLines={3}
            />
          </div>
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Expand Stack gap with Spacer (2)</h2>
      {/* real stuff */}
      <div css={theme => stackCss({ theme, gap: 10 })}>
        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={3} />
        </div>

        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={3} />
        </div>

        <div css={theme => spacerCss({ theme, size: 10 })} />

        <div css={positionerCss}>
          <ContentPlaceholder
            asBox={true}
            isInverted={true}
            numberOfHeadingLines={1}
            numberOfBodyLines={3}
          />
        </div>

        <div css={theme => spacerCss({ theme, size: 10 })} />

        <div css={positionerCss}>
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={3} />
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Multiple columns Grid content</h2>
      {/* real stuff */}
      <div css={theme => stackCss({ theme, gap: 10 })}>
        <div css={positionerCss}>
          <div
            css={theme => ({
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`,
              gap: theme.space[10],
            })}
          >
            {[...Array(2).keys()].map(() => (
              <ContentPlaceholder
                numberOfHeadingLines={1}
                numberOfBodyLines={3}
              />
            ))}
          </div>
        </div>
        <div css={positionerCss}>
          <div
            css={theme => ({
              display: `grid`,
              gridTemplateColumns: `1fr 1fr 1fr 1fr`,
              gap: theme.space[10],
            })}
          >
            {[...Array(4).keys()].map(() => (
              <ContentPlaceholder
                numberOfHeadingLines={1}
                numberOfBodyLines={3}
              />
            ))}
          </div>
        </div>
        <div css={positionerCss}>
          <div
            css={theme => ({
              display: `grid`,
              gridTemplateColumns: `1fr 1fr 1fr`,
              gap: theme.space[10],
            })}
          >
            {[...Array(3).keys()].map(() => (
              <ContentPlaceholder
                numberOfHeadingLines={1}
                numberOfBodyLines={3}
              />
            ))}
          </div>
        </div>

        <div css={positionerCss}>
          <div
            css={theme => ({
              display: `grid`,
              gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr 1fr`,
              gap: theme.space[10],
            })}
          >
            {[...Array(6).keys()].map(() => (
              <ContentPlaceholder
                numberOfHeadingLines={1}
                numberOfBodyLines={3}
              />
            ))}
          </div>
        </div>

        {/*  end of real stuff */}
      </div>
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Responsive Grid content</h2>
      {/* real stuff */}

      <div css={positionerCss}>
        <div
          css={theme => ({
            display: `grid`,
            // gridTemplateColumns: `1fr 1fr 1fr`,
            // gridTemplateColumns: `repeat(3, 1fr)`,
            gridTemplateColumns: `repeat(auto-fill, minmax(15rem, 1fr))`,
            gap: theme.space[10],
          })}
        >
          {[...Array(7).keys()].map(() => (
            <ContentPlaceholder
              picture={true}
              numberOfHeadingLines={1}
              numberOfBodyLines={3}
            />
          ))}
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Example 1 - independent grid chunks</h2>
      {/* real stuff */}

      <div css={theme => [stackCss({ theme, gap: 10 }), positionerCss(theme)]}>
        <div
          css={theme => ({
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            gap: theme.space[6],
            alignItems: `start`,
          })}
        >
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={3} />
          <ContentPlaceholder numberOfHeadingLines={1} numberOfBodyLines={5} />
        </div>
        <div
          css={theme => ({
            display: `grid`,
            gridTemplateColumns: `1fr 10fr 1fr`,
            gap: theme.space[6],
          })}
        >
          <ContentPlaceholder
            numberOfHeadingLines={3}
            numberOfBodyLines={12}
            css={theme => ({
              gridColumnStart: 2,
              // gridColumn: `2`,
            })}
          />
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Example 2 - one grid to rule them all</h2>
      {/* real stuff */}

      <div css={theme => [stackCss({ theme, gap: 10 }), positionerCss(theme)]}>
        <div
          css={theme => ({
            display: `grid`,
            gridTemplateColumns: `repeat(12, 1fr)`,
            gap: theme.space[6],
            gridRowGap: theme.space[10],
            alignItems: `start`,
          })}
        >
          <ContentPlaceholder
            numberOfHeadingLines={1}
            numberOfBodyLines={3}
            css={theme => ({
              gridColumn: `1 / span 6`,
            })}
          />
          <ContentPlaceholder
            numberOfHeadingLines={1}
            numberOfBodyLines={5}
            css={theme => ({
              gridColumn: `7 / span 6`,
            })}
          />
          <ContentPlaceholder
            numberOfHeadingLines={3}
            numberOfBodyLines={12}
            css={theme => ({
              gridColumn: `2 / span 10`,
            })}
          />
        </div>
      </div>
      {/*  end of real stuff */}
    </div>

    {/*  next example */}

    <div css={exampleCss}>
      <h2 css={headingCss}>Example 3 - remove viewport padding on mobile</h2>
      {/* real stuff */}

      <div css={positionerCss}>
        <div
          css={theme => {
            console.log(theme.mediaQueries)
            return {
              display: `grid`,

              gridTemplateColumns: `1fr`,
              gap: theme.space[6],

              alignItems: `start`,
              marginLeft: `-${theme.space[8]}`,
              marginRight: `-${theme.space[8]}`,

              [theme.mediaQueries.tablet]: {
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: `80%`,
              },

              [theme.mediaQueries.desktop]: {
                gridTemplateColumns: `1fr 1fr`,
                maxWidth: `none`,
              },
            }
          }}
        >
          {[...Array(4).keys()].map(() => (
            <ContentPlaceholder
              picture={true}
              numberOfHeadingLines={1}
              numberOfBodyLines={3}
              isHorizontal={true}
            />
          ))}
        </div>
      </div>
      {/*  end of real stuff */}
    </div>
  </Layout>
)

export default IndexPage
