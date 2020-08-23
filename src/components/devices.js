const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "414px",
  // tablet: "768px",
  tablet: "735px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}

export default device
