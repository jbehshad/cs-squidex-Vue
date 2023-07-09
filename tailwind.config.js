module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "csl": {
          "mustard": "rgba(255, 190, 21, 1)",
          "dolphin": "rgba(163, 174, 191, 1)",
          "charcoal": "rgba(30, 30, 30, 1)",
          "cloud": "rgba(255, 255, 255, 1)",
          "moondust": "rgba(244, 244, 244, 1)"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "TwoUnits": "32px",
        "Unit": "16px",
        "ThreeUnits": "48px",
        "FourUnits": "64px",
        "SevenUnits": "112px",
        "OneAndHalfUnits": "24px",
        "EightUnits": "128px",
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "FiveUnits": "80px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius2": "2px",
        "Radius8": "8px",
        "Round": "50%"
      },
      "scale": {
        "MaxWidth": "1440px",
        "Medium": "96px",
        "XXLarge": "288px",
        "XSmall": "16px",
        "Small": "48px",
        "Large": "144px",
        "XLarge": "192px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ]
}