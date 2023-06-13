module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "csl": {
          "dolphin": "rgba(163, 174, 191, 1)",
          "mustard": "rgba(255, 190, 21, 1)",
          "charcoal": "rgba(30, 30, 30, 1)",
          "dark": "rgba(49, 49, 49, 1)",
          "moondust": "rgba(244, 244, 244, 1)",
          "cloud": "rgba(255, 255, 255, 1)"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "FourUnits": "64px",
        "Unit": "16px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "ThreeUnits": "48px",
        "SixUnits": "96px",
        "FiveUnits": "80px",
        "SevenUnits": "112px",
        "EightUnits": "128px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Round": "50%",
        "Radius4": "4px",
        "Radius2": "2px"
      },
      "scale": {
        "MaxWidth": "1440px",
        "XXLarge": "288px",
        "XLarge": "192px",
        "Medium": "96px",
        "XSmall": "16px",
        "Large": "144px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ]
}